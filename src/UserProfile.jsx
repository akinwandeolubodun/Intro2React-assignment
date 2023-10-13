


export default function UserProfile(props) { 
    return (
        <div className="row gy-3">
          <div className="col-md-8 todo m-auto">
            <div className="row pt-3 text-box">
              {/* Note that we are using an embedded JS expression in our JSX */}
              <p className="text">{props.name}</p>
              <p>{props.email}</p>
            </div>
            <div className="row">
              <div className="col-md-2 p-0">
                <button className="btn btn-danger w-100 px-0 m-0 my-0">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      );
}
