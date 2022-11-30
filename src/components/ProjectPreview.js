import Spacer from "./Spacer";

export default function ProjectPreview({ title, dateRange, desc, image, video, site, github }) {
  return <panel className="row projectPreview">
    <img src={image} alt={`icon for ${title}`}/>

    <div className="col details">
      <div className="row centerChildren header">
        <h2>{title}</h2>
        <Spacer/>
        <span>{dateRange}</span>
      </div>
      <p>{desc}</p>
      <div className="links row">
        {video  && <a className="link" href={video} >video demo</a>}
        {site   && <a className="link" href={site}  >website</a>}
        {github && <a className="link" href={github}>github</a>}
      </div>
    </div>
  </panel>
}