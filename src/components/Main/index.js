import Movies from "../Movies"
import "../Main/styles.css"

export default function Main (props) {
    const {data, setData} = props 
    return (
        <>
            <div className="Main">
                <div className="Select">
                    <p>Selecione o filme</p>
                </div>
             <Movies data={data} setData={setData}/>
            </div>
        </>
    )
}