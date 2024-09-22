"use strict";exports.id=154,exports.ids=[154],exports.modules={56154:module=>{module.exports='<df-input\n    *ngIf="!startNode"\n    class="input"\n    [connectorData]="{nodeId, connectorId: nodeId + \'-input-1\', single: false}"\n/>\n\n<div class="tui-space_bottom-4 tui-text_body-s">\n    {{ model.text }}\n</div>\n\n<form [formGroup]="form">\n    <div\n        *ngFor="let fieldName of fieldNames; let i = index"\n        [formGroupName]="fieldName"\n    >\n        <div class="field tui-space_bottom-1">\n            <tui-input\n                formControlName="fieldValue"\n                [tuiTextfieldSize]="\'s\'"\n            />\n\n            <ng-container *ngIf="!!getConnectorId(fieldName)">\n                <df-output\n                    class="output"\n                    [connectorData]="{nodeId, connectorId: getConnectorId(fieldName)!, single: false}"\n                />\n            </ng-container>\n        </div>\n    </div>\n</form>\n\n<button\n    size="s"\n    tuiButton\n    type="button"\n    (click)="add()"\n>\n    Add field\n</button>\n'}};