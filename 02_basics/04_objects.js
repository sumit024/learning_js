const user= new Object();

user.name="Sumit"
user.email="sumit@yopmail.com"

console.log(user);

const regularUser ={
    email:"sumit@yopamil.com",
    fullName:{
        firstName: "Sumit",
        lastName: "Kushwaha"
    }
}

console.log(regularUser.fullName.firstName);

const obj1 ={ 0: "sumit",1:"kush"}
const obj2= {2:"abc",3:"zxc"}

//const obj3 = Object.assign({},obj1,obj2)

const obj3= {...obj1, ...obj2}
console.log(obj3)

console.log(Object.keys(user));
console.log(Object.values(user));

const course = {
    courseName:"Flutter",
    courseInstructor:"Sumit"
}

//course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: insturctor} = course
console.log(insturctor);