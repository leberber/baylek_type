import data from  '/Users/p3117877/Desktop/rntype/assets/doctors.json'

// type docProps = {
//     docType:string

// }
export const  getDoctors  = (value :string) => {
    
    return data.features.filter((d)=>d.properties.doctor_type===value)
}
// const d = data.features.forEach(element => {
//   console.log(element.properties.name)
  
// });

// var joe = List.filter(function(el){
//     return el.employee === "Joe"
//    });

// export default getDoctors