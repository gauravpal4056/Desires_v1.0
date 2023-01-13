import {useState} from "react"

const Bottom = () => {

    const [url, setUrl] = useState("")
    const handleChange = (e) => {
        setUrl(e.target.value)
    }
    const addUrl = (e) => {
        e.preventDefault();
        console.log(url);
    }

    const openModal = () => document.getElementById("add").classList.toggle("hidden");
    return (
        <>
            {/* The button to open modal */}
            {/* <label htmlFor="my-modal-3" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div id="add" className="modal modal-open hidden">
                <div className="modal-box relative">
                    <label onClick={openModal} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={addUrl} className="m-5">
                        <input onChange={handleChange} name="url" value={url} type="text" placeholder=" Enter Product URL" className="input input-bordered input-success w-full max-w-xs m-3" />
                        <button type="submit" className="btn btn-outline btn-success mx-3 rounded-lg">ADD</button>
                    </form>
                </div>
            </div>
            <div className=" bottom-0 w-full flex justify-center fixed  mx-auto animate-bounce" onClick={openModal}  >
            <img  className="h-20  shadow-2xl p-0 bg-slate-300  rounded-full m-4" src="addIcon.gif" alt="" />
            <h1 className="text-center my-auto font-bold text-2xl">Add</h1>
            </div>
        </>
    )
}

export default Bottom