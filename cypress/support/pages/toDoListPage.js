// -Constants
const cTaskBar = '#task';
const cSendBtn = '#sendTask';

// -Tests
class toDoListPage{
    typeTask (task){
        cy.get(cTaskBar).type(task);
    }

    clickSendBtn (){
        cy.get(cSendBtn).click();
    }

    clickTask (task){
        cy.contains(task).click();
    }

    clickDeleteBtn (task){
        cy.contains(task).next('button').click();
    }
}

// -Export
export default new toDoListPage()
