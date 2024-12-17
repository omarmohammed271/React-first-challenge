export default function Post({title,content="no Content"}){

    return (
        <div className="w-full justify-center border-4 border-cyan-400 p-5 ml-4 text-center mt-4">
            <h1>{title}</h1>
            <hr />
            <p className="text-sm">{content}</p>
        </div>
    )
}