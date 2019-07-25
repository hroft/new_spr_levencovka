import uuid from 'uuid';
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types';

const initialState = {
    items:[
        {
            address:" пр. Солженицына, 24/23",
            group_spr:"torg",
            id:uuid(),
            name:"\"Апекс+\" на Солженицына",
            phone:"8 (863) 229-43-10",
            time:"8.00 - 23.45",
            url_detail:"https://levencovka.ru/?p=2423",
            url_img:"https://levencovka.ru/static/images/card/1.jpg"},
            {
                address:" ул. Жданова, 11",
                group_spr:"torg",
                id:uuid(),
                name:"\"Апекс+\" на Жданова",
                phone:"",
                time:"7.00 - 23.45",
                url_detail:"https://levencovka.ru/?p=2427",
                url_img:"https://levencovka.ru/static/images/card/2.jpg"},
                {
                    address:"пр. Жукова, 36",
                    group_spr:"torg",
                    id:uuid(),
                    name:"\"Ассорти+\" на Жукова",
                    phone:"",
                    time:"Круглосуточно",
                    url_detail:"https://levencovka.ru/?p=2431",
                    url_img:"https://levencovka.ru/static/images/card/3.jpg"},

    ]
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return{
                ...state
            };
        case DELETE_ITEM:
                    return {
                      ...state,
                      items: state.items.filter(item => item.id !== action.payload)
                    };
        case ADD_ITEM:
            return{
                ...state,
                items: [action.payload, ...state.items]
            };
        default:
            return state;    
    }
}