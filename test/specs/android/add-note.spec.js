import allureReporter from '@wdio/allure-reporter';

describe('NotePad Application', () => {
    it('Click on allow for privacy access', async () => {
        allureReporter.addSeverity('Critical');
        allureReporter.addFeature('Privacy prompt')
      //Click on the allow btn
        await $('//*[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]').click();

    });
    it('Click on the skip btn for tutorial', async () => {
        allureReporter.addSeverity('Critical');
        //Click on the skip btn
        await $('//*[@text="SKIP"]').click();

        //Assertion-Confirm add note is displayed
        allureReporter.addSeverity('Critical');
        await expect ($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/empty_text"]')).toHaveText('Add note');
    });
    it('Add list to notepad and save it', async () => {
        allureReporter.addSeverity('Normal');
        allureReporter.addFeature('Adding a Note & saving it')
        //Click on the + to add a note
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]').click();

        //Click on the text btn to add text
        await $('//*[@text="Text"]').click();

        //Click on title bar to add title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue('My Favorite Cars');

        //Add list of cars to body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue('Ford\nChevy\nDodge');

        //Save list 
        await driver.back();
        await driver.back();
        await driver.back();

        //Assertion- To confirm list is there
        await expect ($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')).toHaveText('My Favorite Cars');


    });
    it('Delete the note', async () => {
        allureReporter.addSeverity('Normal');
        allureReporter.addFeature('Delete Note')
        //Click on the list to open
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click();

        //Click on the 3 dots for more options
        await $('~More').click();

        //Click on the delete btn
        await $('//*[@text="Delete"]').click();

        //Click on the OK btn for deletion
        await $('//*[@text="OK"]').click();

        //Assertion- To confirm the list is not present
        await expect ($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/note_list"]')).not.toHaveText('My Favorite Cars');
        

    });
    it('Delete list from trash', async () => {
        allureReporter.addFeature('Delete from trash')
        allureReporter.addSeverity('Normal');
        //Click on the icon_nav btn for more options
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        //Click on Trash Can btn
        await $('//*[@text="Trash Can"]').click();

        //Click on the main btn Trash can
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]').click();

        //Click on the OK btn to delete from trash can
        await $('//*[@text="OK"]').click();

        //Assertion- Confirm the trash can is empty
        await expect ($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/note_list"]')).not.toHaveText('My Favorite Cars');

    });
});