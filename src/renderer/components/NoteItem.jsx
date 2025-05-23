import { simpleDateFormat } from "../utils/functions";

export default function NoteItem({
    title,
    description,
    lastWriteTime
}) {
    return (
        <li class="rounded hover:bg-zinc-700 duration-150 ease-in-out w-full px-2 py-2 text-white">
            <div>
                <div className="flex items-center w-full">
                    <h3 class="text-lg flex-1 font-semibold">{ title }</h3>
                    <span>{ simpleDateFormat(new Date(lastWriteTime)) }</span>
                </div>
                <p class="text-zinc-400 line-clamp-1">{ description }</p>
            </div>
        </li>
    );
}