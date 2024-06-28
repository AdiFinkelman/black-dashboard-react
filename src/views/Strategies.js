import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

function Strategies() {
  const [strategies, setStrategies] = useState([]);

  useEffect(() => {
    const fetchStrategies = async () => {
      const response = await axios.get('http://127.0.0.1:5586/strategy_descriptions');
      setStrategies(response.data);
    };

    fetchStrategies();
  }, []);

  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Strategies</CardTitle>
            </CardHeader>
            <CardBody>
                <Row>
                  {Object.keys(strategies).map((key) => (
                    <Col md="12" key={key}>
                      <Card className="mb-3" style={{ backgroundColor: '#134f5c' }}>
                        <CardHeader>
                          <CardTitle tag="h5">{strategies[key].name}</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <p>{strategies[key].description}</p>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Strategies;
