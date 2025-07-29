import { Link } from "react-router"

function JuiceCard ({juiceImg, juiceTitle, jiuceDetails}){
    return (
        <>
            <li className="juiceInner" title="Coming Soon">
                <div className="juiceWrap">
                    <div className="juiceImg text-center">
                        <img src={juiceImg} className="img-fluid" />
                    </div>
                    <div className="jiuceTitle">
                        <h4>{juiceTitle}</h4>
                        <p className="text-center">{jiuceDetails}</p>
                        <div className="text-center">
                            <Link className="btn btn-success rounded-pill disabled" to="#">Coming Soon</Link>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
} export default JuiceCard