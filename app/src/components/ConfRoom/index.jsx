import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import s from './style.module.css';




export default function ConfRoom() {
   
    const submit = event => {
        event.preventDefault();
        const {tower, floor, room, comment, datetime} = event.target;        
        const object = {
            'Башня': tower.value,
            'Этаж': floor.value,
           ' Переговорка': room.value,
            'Время встречи': datetime.value,
            'Ваш комментарий': comment.value
        };
        console.log(object);
        };
    
    // const clear = event => {
    //     event.preventDefault();
    //     form.reset();        
         
    // }
    
        
    const towers = [
            {id: 1, title: 'Башня А', value: 1},
            {id: 2, title: 'Башня Б', value: 2}
        ];

    const floors = [
            {id: 1, title: 'Этаж 3', value: 3},
            {id: 2, title: 'Этаж 4', value: 4},
            {id: 3, title: 'Этаж 5', value: 5},
            {id: 4, title: 'Этаж 6', value: 6},
            {id: 5, title: 'Этаж 7', value: 7},
            {id: 6, title: 'Этаж 8', value: 8},
            {id: 7, title: 'Этаж 9', value: 9},
            {id: 8, title: 'Этаж 10', value: 10},
            {id: 9, title: 'Этаж 11', value: 11},
            {id: 10, title: 'Этаж 12', value: 12},
            {id: 11, title: 'Этаж 13', value: 13},
            {id: 12, title: 'Этаж 14', value: 14},
            {id: 13, title: 'Этаж 15', value: 15},
            {id: 14, title: 'Этаж 16', value: 16},
            {id: 15, title: 'Этаж 17', value: 17},
            {id: 16, title: 'Этаж 18', value: 18},
            {id: 17, title: 'Этаж 19', value: 19},
            {id: 18, title: 'Этаж 20', value: 20},
            {id: 19, title: 'Этаж 21', value: 21},
            {id: 20, title: 'Этаж 22', value: 22},
            {id: 21, title: 'Этаж 23', value: 23},
            {id: 22, title: 'Этаж 24', value: 24},
            {id: 23, title: 'Этаж 25', value: 25},
            {id: 24, title: 'Этаж 26', value: 26},
            {id: 25, title: 'Этаж 27', value: 27},
        ];

        const rooms = [
            {id: 1, title: 'Переговорка №1', value: 1},{id: 2, title: 'Переговорка №2', value: 2},
            {id: 3, title: 'Переговорка №3', value: 3},
            {id: 4, title: 'Переговорка №4', value: 4},
            {id: 5, title: 'Переговорка №5', value: 5},
            {id: 6, title: 'Переговорка №6', value: 6},
            {id: 7, title: 'Переговорка №7', value: 7},
            {id: 8, title: 'Переговорка №8', value: 8},
            {id: 9, title: 'Переговорка №9', value: 9},
            {id: 10, title: 'Переговорка №10', value: 10},
        ];

  return (
    <div className={s.container}>
        <div className={s.smallContainer}>
            <div className={s.header}>
                ВЫБЕРИТЕ ПЕРЕГОВОРНУЮ КОМНАТУ
            </div>
            <form onSubmit={submit} className={s.form}>
                <select name="tower" >
                    {
                        towers.map(({id, title, value}) => <option key={id} value={value}>{title}</option>)
                    }
                </select>

                <select name="floor" >
                {
                    floors.map(({id, title, value}) => <option key={id} value={value}>{title}</option>)
                }
                </select>

                <select name="room" >
                    {
                        rooms.map(({id, title, value}) => <option key={id} value={value}>{title}</option>)
                    }
                </select>
                <input type="datetime-local" name="datetime"  />
                               
                <textarea name="comment" id="" cols="30" rows="10" className={s.comment} placeholder='Ваш комментарий'></textarea>

                <div className={s.btns}>
                    <input type="reset" value="Очистить" />
                    <button>ОТПРАВИТЬ</button>
                
                </div>
                
                
            </form>
        </div>
        
    </div>
  )
}
