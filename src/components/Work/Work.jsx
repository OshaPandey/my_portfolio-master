import "./work.scss";
export default function Work() {
  return (
    <div className="work">
      <div className="work_container">
        <div className="top_containers">
          <div className="work_top_container">My Expertise</div>
          <div className="work_top2_container">What do I do</div>
        </div>
        <div className="work_middle_container">
          <div className="work_items">
            <div className="work_items_logo">
              <img
                src="https://res.cloudinary.com/dakac0rtz/image/upload/v1746024414/data-scientist_zygrei.png"
                alt="pls"
              />
            </div>
            <div className="work_items_title">Data Scientist</div>
            <div className="work_items_content">
            Mimicing human brain
            </div>
          </div>

          <div className="work_items">
            <div className="work_items_logo">
              <img
                src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1677513063/Osha/percentage-square-svgrepo-com_wux9b6.svg"
                alt="pls"
              />
            </div>
            <div className="work_items_title">Data Analyst</div>
            <div className="work_items_content">
            Unlocking Insights, Empowering Decisions.
            </div>
          </div>

          <div className="work_items">
            <div className="work_items_logo">
              <img
                src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1677514475/Osha/machine-learning-solid-svgrepo-com_jqfjnj.svg"
                alt="pls"
              />
            </div>
            <div className="work_items_title">ML Engineer</div>
            <div className="work_items_content">
            Harnessing Data, Empowering Intelligence.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
