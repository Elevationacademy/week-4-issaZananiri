//write your code here to make the tests pass

class Document{
    constructor(name){
        this.EmployeeName = name
    }
}
class Employee{
    constructor(name){
        this.name = name
    }
    work(office){
        let i
        for(i=0;i<10;i++){
            office.documents.push(new Document(this.name))
        }
    }
}
class Manager{
    constructor(name){
        this.name=name
        this.employees=[]
    }
    hireEmployee(name){
        const emp = new Employee(name) 
        this.employees.push(emp)
        
    }
    askEmployeesToWork(name){
        for(let emp of this.employees)
        emp.work(name)
    }
}

class Cleaner{
    constructor(name){
        this.name = name
    }
    clean(){
        console.log("Clean")
    }
}
class Office{
    constructor(){
        this.documents = []
        this.managers = []
        this.cleaners = []
    }
    hireManager(name){
        const Man = new Manager (name)
        this.managers.push(Man)
    }
    hireCleaner(name){
        const Clean = new Cleaner (name)
        this.cleaners.push(Clean)

    }
    startWorkDay(){
        for(let manager of this.managers){
            manager.askEmployeesToWork(this)}
        for(let cleaner of this.cleaners){
        cleaner.clean()}
    }
    }