import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

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
<div className="card_size">
{items.map(({ id, name, url_img, address, phone, time, url_detail, group_spr }) => (
  <CSSTransition key={id} timeout={500} classNames="fade">
<Card>
        <CardImg width="100%" src={url_img} alt="Card image cap" />

        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{address}</CardSubtitle>
          <CardText>{phone}</CardText>
          <CardText>{time}</CardText>
          <CardText>{group_spr}</CardText>
          <a href={url_detail}><Button>Подробнее</Button></a>
                       <Button
                     className="remove-btn"
                     color="danger"
                     size="sm"
                     onClick={this.onDeleteClick.bind(this, id)}
                   >
                     &times;
                   </Button>
        </CardBody>
      </Card>
      </CSSTransition>
      ))}
      </div>
      </Container>
      // <Container>
      //   <ListGroup>
      //     <TransitionGroup className="spr-list">
      //       {items.map(({ id, name }) => (
      //         <CSSTransition key={id} timeout={500} classNames="fade">
      //           <ListGroupItem>
      //             <Button
      //               className="remove-btn"
      //               color="danger"
      //               size="sm"
      //               onClick={this.onDeleteClick.bind(this, id)}
      //             >
      //               &times;
      //             </Button>
      //             {name}
      //           </ListGroupItem>
      //         </CSSTransition>
      //       ))}
      //     </TransitionGroup>
      //   </ListGroup>
      // </Container>
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
