export default{
    getData:()=>{
        const obj =[];
        const inputData={
        "id":"",
        "img":"",
        "bike":"",
        "price":"",
        "speed":"",
        "strok":"",
        "engine":"",
        "engiine_power":"",
        "description":""
        };
        
        // listen input
        
            
            const submitEvent=async()=>document.getElementById('_submit').addEventListener('click',()=>{
                const inputData1=Object.create(inputData);
                inputData1.img=document.getElementById('_img').value,
                inputData1.bike=document.getElementById('_bike').value,
                inputData1.price=document.getElementById('_price').value,
                inputData1.speed=document.getElementById('_maxSpeed').value,
                inputData1.strok=document.getElementById('_strok').value,
                inputData1.engine=document.getElementById('_engine').value,
                inputData1.engiine_power=document.getElementById('_hp').value,
                inputData1.description=document.getElementById('_descreption').value
               
                // console.log(inputData.engine);
                // console.log(inputData);
                
            //     fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
            //         if (err){
            //             console.log(err);
            //         } else {
            //         obj = JSON.parse(data); //now it an object
            //         obj.push(inputData1); //add some data
            //         json = JSON.stringify(obj); //convert it back to json
            //         fs.writeFile('data.json', json, 'utf8', callback); // write it back 
            //     }});
                 obj.push(inputData1);
                console.log(obj);
                 
             });
           
        
        
        submitEvent();
            
        
    }
}







