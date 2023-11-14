class AddNoteScreen {
    get skipBtn() {
        return $('//*[@text="SKIP"]');
    }

    get addNoteText() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/empty_text"]');
    }

    get addNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
    }

    get textBtn() {
        return $('//*[@text="Text"]');
    }

    get titleBar() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get listBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get confirmList() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
    }

    get threeDotsBtn() {
        return $('~More');
    }

    get deleteBtn() {
        return $('//*[@text="Delete"]');
    }

    get okayBtn() {
        return $('//*[@text="OK"]');
    }

    get noteList() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/note_list"]');
    }

    get navBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashCanBtn() {
        return $('//*[@text="Trash Can"]');
    }

    get mainBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
    }

    get okBtn() {
        return $('//*[@text="OK"]');
    }
}

export default new AddNoteScreen();