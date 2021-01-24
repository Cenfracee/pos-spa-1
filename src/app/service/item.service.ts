import { Item } from "../model/item";

let items: Array<Item> = [];
let loaded = false;

export function getAllItems(): Promise<Array<Item>> {

    return new Promise((resolve, reject) => {

        if (!loaded) {

            $.ajax({
                method: "GET",
                url: 'http://localhost:8080/pos/items'
            }).then((data)=>{
                items = data;
                loaded = true;
                resolve(items);
            }).fail(()=>{
                reject();
            })

        }else{
            resolve(items);
        }

    });
}

export function deleteItem(code: string): Promise<void>{
    return new Promise((resolve, reject)=>{
        
        $.ajax({
            method: "DELETE",
            url: `http://localhost:8080/pos/items?code=${code}`
        }).then(()=>{
            items.splice(items.findIndex((elm)=>elm.code===code),1);
            resolve(); 
        }).catch(()=>{
            reject();
        })

    });
}