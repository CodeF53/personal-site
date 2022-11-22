import Spacer from "./Spacer";

export default function ProjectFolder({ title, dateRange, desc, projects}) {
  return <panel className="col projectFolder">
    <div className="row centerChildren header">
      <h2>{title}</h2>
      <Spacer/>
      <span>{dateRange}</span>
    </div>
    <p>{desc}</p>
    {projects}
  </panel>
}