import { SLIDER_CDN } from "../utils/contant";

const Slider = ({sliderData}) => {
    //const {imageId,id} = sliderData.

    // const {} = props;
//console.log(props)
    return (
        <div>
            <img width="150px" height="180px" src={SLIDER_CDN+sliderData.imageId}></img>
            {/* <h3 className="text-center">{sliderData.action.text}</h3> */}
             <h4 className="text-center">{sliderData.id}</h4>
        </div>
    )
}
export default Slider;