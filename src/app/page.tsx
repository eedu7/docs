import Link from "next/link";

export default function Home() {
    return (<div className="flex min-h-screen justify-center items-center">
        Click <Link href="/documents/123"><span className="text-blue-800 underline ml-2">here</span></Link>, to go to
        document
    </div>);
}