import addNoteScreen from '../../screenobjects/add-note.screen';
import allureReporter from '@wdio/allure-reporter';


describe('NotePad Application', () => {
    it('Click on the skip btn for tutorial', async () => {
        allureReporter.addSeverity('Critical');
        allureReporter.addFeature('Skip Button')
        //Click on the allow btn
        await addNoteScreen.skipBtn.click();

        //Assertion-Confirm add note is displayed
        allureReporter.addSeverity('Critical');
        await expect (addNoteScreen.addNoteText).toHaveText('Add note');

    });
    it('Add list to notepad and save it', async () => {
        allureReporter.addSeverity('Normal');
        allureReporter.addFeature('Adding a Note & saving it')
        //Click on the + to add a note
        await addNoteScreen.addNote.click();

        //Click on the text btn to add text
        await addNoteScreen.textBtn.click();

        //Click on title bar to add title
        await addNoteScreen.titleBar.addValue('My Favorite Cars');

        //Add list of cars to body
        await addNoteScreen.listBtn.addValue('Ford\nChevy\nDodge');

        //Save list 
        await driver.back();
        await driver.back();
        await driver.back();

        //Assertion- To confirm list is there
        await expect (addNoteScreen.confirmList).toHaveText('My Favorite Cars');


    });
    it('Delete the note', async () => {
        allureReporter.addSeverity('Normal');
        allureReporter.addFeature('Delete Note')
        //Click on the list to open
        await addNoteScreen.confirmList.click();

        //Click on the 3 dots for more options
        await addNoteScreen.threeDotsBtn.click();

        //Click on the delete btn
        await addNoteScreen.deleteBtn.click();

        //Click on the OK btn for deletion
        await addNoteScreen.okayBtn.click();

        //Assertion- To confirm the list is not present
        await expect (addNoteScreen.noteList).not.toHaveText('My Favorite Cars');
        

    });
    it('Delete list from trash', async () => {
        allureReporter.addFeature('Delete from trash')
        allureReporter.addSeverity('Normal');
        //Click on the icon_nav btn for more options
        await addNoteScreen.navBtn.click();

        //Click on Trash Can btn
        await addNoteScreen.trashCanBtn.click();

        //Click on the main btn Trash can
        await addNoteScreen.mainBtn.click();

        //Click on the OK btn to delete from trash can
        await addNoteScreen.okBtn.click();

        //Assertion- Confirm the trash can is empty
        await expect (addNoteScreen.noteList).not.toHaveText('My Favorite Cars');

    });
});