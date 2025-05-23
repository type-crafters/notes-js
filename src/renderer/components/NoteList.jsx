import { useRef } from "react";
import { Mathf } from "../utils/Mathf";
import NoteItem from "./NoteItem";
import { ofWindowWidth } from "../utils/functions";

export default function NoteList() {

    const listItems = [
        {
            title: "main.py",
            description: "import os...",
            lastWriteTime: new Date()
        },
        {
            title: "catalogue",
            description: "mvn clean verify sonar:sonar \\...",
            lastWriteTime: new Date("2023-05-16T08:52:00.000Z")
        }
    ];

    /** @type { React.RefObject<HTMLElement> } */
    const ref = useRef(null);

    /** @argument { MouseMoveEvent } event */
    const handleMouseDown = () => {

        /** @argument { MouseMoveEvent } event */
        const handleMouseMove = (event) => {
            const clamp = Mathf.clamp(
                event.clientX,
                ofWindowWidth(20),
                ofWindowWidth(40)
            );
            
            ref.current.style.width = clamp + "px";
        };

        /** @argument { MouseMoveEvent } event */
        const handleMouseUp = () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    return (
        <aside
            ref={ref}
            className="h-full flex min-w-40 border-r border-neutral-400"
        >
            <div className="h-full w-1"></div>
            <nav className="h-full flex-1 flex flex-col gap-2">
                <h2 className="text-3xl font-semibold my-4 mx-1">Your notes</h2>
                <ul className="flex flex-col gap-2 w-full overflow-y-auto overflow-x-hidden">
                    {
                        listItems.map((item, index) => (
                            <NoteItem
                                key={index}
                                title={item.title}
                                description={item.description}
                                lastWriteTime={item.lastWriteTime}
                            />
                        ))
                    }
                </ul>
            </nav>
            <button
                className="h-full w-1 cursor-ew-resize"
                onMouseDown={handleMouseDown}
                aria-label="Resize sidebar"
            ></button>
        </aside>
    );
}