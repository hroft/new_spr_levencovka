import React, { Component } from 'react';
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class SprList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };
  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <TransitionGroup className="card_size">
          {items.map(
            ({
              id,
              name,
              url_img,
              address,
              phone,
              time,
              url_detail,
              group_spr
            }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <Card>
                  <CardImg
                    width="100%"
                    src={url_img}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <div className="text-size">
                      <CardText>
                        <i className="fa fa-map-marker m-r-10" />
                        {address}
                      </CardText>
                      <CardText>
                        <i className="fa fa-info-circle m-r-10" />
                        {phone}
                      </CardText>
                      <CardText>
                        <i className="fal fa-alarm-clock m-r-10" />
                        {time}
                      </CardText>
                      <CardText>{group_spr}</CardText>
                      <CardText>{url_detail}</CardText>
                    </div>
                    <div className="btn-size">
                      <Button>Изменить</Button>
                      <Button
                        className="remove-btn"
                        color="danger"
                        onClick={this.onDeleteClick.bind(this, id)}
                      >
                        Удалить
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </CSSTransition>
            )
          )}
        </TransitionGroup>
      </Container>
    );
  }
}

SprList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(SprList);
