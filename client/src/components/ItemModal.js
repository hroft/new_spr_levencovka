import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
import uuid from "uuid";

class ItemModal extends Component {
  state = {
    modal: false,
    name: "",
    address: "",
    phone:"",
    time:"",
    url_detail:"",
    url_img:"",
    group_spr:"",
    value: "torg"
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: uuid(),
      name: this.state.name,
      address: this.state.address,
      phone: this.state.phone,
      time: this.state.time,
      url_detail: this.state.url_detail,
      url_img: this.state.url_img,
      group_spr: this.state.value
    };

    //Additem via addItem action
    this.props.addItem(newItem);

    //Close modal
    this.toggle();
  };



  render() {
    return (
      <div>
        <Button color="dark" style={{ margin: "2rem 0" }} onClick={this.toggle}>
          Добавить элемент справочника
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Добавить элемент в справочник
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item" style={{ margin: "0.8rem" }}>Название</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="наименование объекта"
                  onChange={this.onChange}
                />
                <Label for="address" style={{ margin: "0.8rem" }}>Адрес</Label>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="адрес объекта"
                  onChange={this.onChange}
                />
                <Label for="phone" style={{ margin: "0.8rem" }}>Телефоны</Label>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="телефоны... отделять запятой"
                  onChange={this.onChange}
                />
                <Label for="time" style={{ margin: "0.8rem" }}>Время работы</Label>
                <Input
                  type="text"
                  name="time"
                  id="time"
                  placeholder="время работы"
                  onChange={this.onChange}
                />
                <Label for="url_detail" style={{ margin: "0.8rem" }}>Адрес ссылки на страницу</Label>
                <Input
                  type="text"
                  name="url_detail"
                  id="url_detail"
                  placeholder="ссылка на страницу с детальным описанием"
                  onChange={this.onChange}
                /> 
                <Label for="url_img" style={{ margin: "0.8rem" }}>Адрес ссылки на фото</Label>
                <Input
                  type="text"
                  name="url_img"
                  id="url_img"
                  placeholder="ссылка на фото"
                  onChange={this.onChange}
                />
                <Label for="select" style={{ margin: "0.8rem" }}>группа в справочнике</Label>
            {/* <select value={this.state.value} onChange={this.handleChange} name="group_spr"> */}
            <select value = {this.state.value} onChange={this.onChange} name="group_spr">
                <option value="torg">Магазины, торговые центры</option>
                <option value="apt">Аптеки, здравоохранение</option>
                <option value="rem">Ремонтные мастерские</option>
                <option value="kr">Салоны красоты</option>
                <option value="obr">Образование, культура</option>
                <option value="gkh">ЖКХ</option>
            </select>
                <Button color="dark" style={{ margin: "2rem 0" }} block>
                  Добавить
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);
