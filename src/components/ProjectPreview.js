import Spacer from "./Spacer";

export default function ProjectPreview({ title, dateRange, desc, image }) {
  return <panel className="row projectPreview">
    <img src={image} alt={`icon for ${title}`}/>

    <div className="col details">
      <div className="row centerChildren header">
        <h2>{title}</h2>
        <Spacer/>
        <span>{dateRange}</span>
      </div>
      <p>{desc}</p>
    </div>
  </panel>
}