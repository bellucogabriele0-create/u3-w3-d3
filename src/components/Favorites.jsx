import { Col, Row, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

const Favourites = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.favourites.jobs);

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {jobs.map((job) => (
            <li key={job._id} className="my-4 d-flex align-items-center">
              <Button
                variant="danger"
                className="me-3"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_FAVOURITES",
                    payload: job._id,
                  })
                }
              >
                <FaTrash />
              </Button>

              <div>
                <div className="fw-bold">{job.title}</div>
                <div>{job.company_name}</div>
                <a href={job.url} target="_blank" rel="noreferrer">
                  Vai alla job page
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default Favourites;
