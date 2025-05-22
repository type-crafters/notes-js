import NoteList from "../components/NoteList";
import NoteSpace from "../components/NoteSpace";

export default function HomeView() {
    return (
        <main className="flex w-full h-full">
            <NoteList />
            <NoteSpace />
        </main>
    );
}