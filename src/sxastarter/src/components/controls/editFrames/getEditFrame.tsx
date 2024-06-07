


export default function getEditFrame(fields: any, datasource: any) {

    if(!Array.isArray(fields)){
        throw new Error('fields must be an array');
    }

    if(datasource && typeof datasource !== 'string'){
        throw new Error('datasource must be a string');
    }

    const editFrameButtons = [
        {
            header: 'FieldEditButton',
            icon: '/~/icon/Office/16x16/pencil.png',
            fields,
            tooltip: 'something'
        }
    ];

    return {
        dataSource: datasource ? { itemId: datasource }: undefined,
        buttons: editFrameButtons,
        title: 'Edit more',
        tooltip: 'Perform editing',
        cssClass: 'jss-edit-frame',
        parameters: {}
    };
}
