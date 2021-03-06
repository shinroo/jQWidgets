/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class jqxSchedulerComponent implements OnChanges {
    attrAppointmentOpacity: number;
    attrAppointmentsMinHeight: number;
    attrAppointmentDataFields: jqwidgets.SchedulerAppointmentDataFields;
    attrAppointmentTooltips: boolean;
    attrColumnsHeight: number;
    attrContextMenu: boolean;
    attrContextMenuOpen: (menu: any, appointment: any, event: any) => void;
    attrContextMenuClose: (menu: any, appointment: any, event: any) => void;
    attrContextMenuItemClick: (menu: any, appointment: any, event: any) => boolean;
    attrContextMenuCreate: (menu: any, settings: any) => void;
    attrChangedAppointments: Array<jqwidgets.SchedulerChangedAppointments>;
    attrDisabled: boolean;
    attrDate: any;
    attrDayNameFormat: string;
    attrEnableHover: boolean;
    attrEditDialog: boolean;
    attrEditDialogDateTimeFormatString: string;
    attrEditDialogDateFormatString: string;
    attrEditDialogOpen: (dialog?: any, fields?: any, editAppointment?: any) => void;
    attrEditDialogCreate: (dialog?: any, fields?: any, editAppointment?: any) => void;
    attrEditDialogKeyDown: (dialog?: any, fields?: any, editAppointment?: any, event?: any) => boolean;
    attrEditDialogClose: (dialog?: any, fields?: any, editAppointment?: any) => void;
    attrExportSettings: jqwidgets.SchedulerExportSettings;
    attrLegendPosition: string;
    attrLegendHeight: number;
    attrLocalization: any;
    attrMin: any;
    attrMax: any;
    attrReady: () => void;
    attrRenderAppointment: (data: any) => any;
    attrRendering: () => void;
    attrRendered: () => void;
    attrRtl: boolean;
    attrResources: jqwidgets.SchedulerResources;
    attrRowsHeight: number;
    attrShowToolbar: boolean;
    attrShowLegend: boolean;
    attrScrollBarSize: number;
    attrSource: any;
    attrStatuses: jqwidgets.SchedulerStatuses;
    attrTouchRowsHeight: number;
    attrTheme: string;
    attrTouchAppointmentsMinHeight: number;
    attrTouchScrollBarSize: number;
    attrTimeZone: string;
    attrTouchDayNameFormat: any;
    attrToolBarRangeFormat: string;
    attrToolBarRangeFormatAbbr: string;
    attrToolbarHeight: number;
    attrViews: Array<any>;
    attrView: any;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxScheduler;
    constructor(containerElement: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): boolean;
    arraysEqual(attrValue: any, hostValue: any): boolean;
    manageAttributes(): any;
    moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void;
    moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void;
    createComponent(options?: any): void;
    createWidget(options?: any): void;
    __updateRect__(): void;
    setOptions(options: any): void;
    appointmentOpacity(arg?: number): any;
    appointmentsMinHeight(arg?: number): any;
    appointmentDataFields(arg?: jqwidgets.SchedulerAppointmentDataFields): any;
    appointmentTooltips(arg?: boolean): any;
    columnsHeight(arg?: number): any;
    contextMenu(arg?: boolean): any;
    contextMenuOpen(arg?: (menu: any, appointment: any, event: any) => void): any;
    contextMenuClose(arg?: (menu: any, appointment: any, event: any) => void): any;
    contextMenuItemClick(arg?: (menu: any, appointment: any, event: any) => boolean): any;
    contextMenuCreate(arg?: (menu: any, settings: any) => void): any;
    changedAppointments(arg?: Array<jqwidgets.SchedulerChangedAppointments>): any;
    disabled(arg?: boolean): any;
    date(arg?: any): any;
    dayNameFormat(arg?: string): any;
    enableHover(arg?: boolean): any;
    editDialog(arg?: boolean): any;
    editDialogDateTimeFormatString(arg?: string): any;
    editDialogDateFormatString(arg?: string): any;
    editDialogOpen(arg?: (dialog?: any, fields?: any, editAppointment?: any) => void): any;
    editDialogCreate(arg?: (dialog?: any, fields?: any, editAppointment?: any) => void): any;
    editDialogKeyDown(arg?: (dialog?: any, fields?: any, editAppointment?: any, event?: any) => boolean): any;
    editDialogClose(arg?: (dialog?: any, fields?: any, editAppointment?: any) => void): any;
    exportSettings(arg?: jqwidgets.SchedulerExportSettings): any;
    height(arg?: number | string): any;
    legendPosition(arg?: string): any;
    legendHeight(arg?: number): any;
    localization(arg?: any): any;
    min(arg?: any): any;
    max(arg?: any): any;
    ready(arg?: () => void): any;
    renderAppointment(arg?: (data: any) => any): any;
    rendering(arg?: () => void): any;
    rendered(arg?: () => void): any;
    rtl(arg?: boolean): any;
    resources(arg?: jqwidgets.SchedulerResources): any;
    rowsHeight(arg?: number): any;
    showToolbar(arg?: boolean): any;
    showLegend(arg?: boolean): any;
    scrollBarSize(arg?: number): any;
    source(arg?: any): any;
    statuses(arg?: jqwidgets.SchedulerStatuses): any;
    touchRowsHeight(arg?: number): any;
    theme(arg?: string): any;
    touchAppointmentsMinHeight(arg?: number): any;
    touchScrollBarSize(arg?: number): any;
    timeZone(arg?: string): any;
    touchDayNameFormat(arg?: string): any;
    toolBarRangeFormat(arg?: string): any;
    toolBarRangeFormatAbbr(arg?: string): any;
    toolbarHeight(arg?: number): any;
    views(arg?: Array<any>): any;
    view(arg?: string): any;
    width(arg?: number | string): any;
    addAppointment(item: jqwidgets.SchedulerAppointmentDataFields): void;
    beginAppointmentsUpdate(): void;
    clearAppointmentsSelection(): void;
    clearSelection(): void;
    closeMenu(): void;
    closeDialog(): void;
    deleteAppointment(appointmenId: string): void;
    destroy(): void;
    endAppointmentsUpdate(): void;
    ensureAppointmentVisible(id: string): void;
    ensureVisible(item: any, resourceId: string): void;
    exportData(format: string): any;
    focus(): void;
    getAppointmentProperty(appointmentId: string, name: string): any;
    getSelection(): jqwidgets.SchedulerGetSelection;
    getAppointments(): Array<jqwidgets.SchedulerAppointmentDataFields>;
    getDataAppointments(): Array<any>;
    hideAppointmentsByResource(resourcesId: string): void;
    openMenu(left: number, top: number): void;
    openDialog(left: number, top: number): void;
    selectAppointment(appointmentId: string): void;
    setAppointmentProperty(appointmentId: string, name: string, value: any): void;
    selectCell(date: any, allday: boolean, resourceId: string): void;
    showAppointmentsByResource(resourceId: string): void;
    scrollWidth(): number;
    scrollHeight(): number;
    scrollLeft(left: number): void;
    scrollTop(top: number): void;
    onAppointmentChange: EventEmitter<{}>;
    onAppointmentClick: EventEmitter<{}>;
    onAppointmentDoubleClick: EventEmitter<{}>;
    onAppointmentDelete: EventEmitter<{}>;
    onAppointmentAdd: EventEmitter<{}>;
    onBindingComplete: EventEmitter<{}>;
    onCellClick: EventEmitter<{}>;
    onCellDoubleClick: EventEmitter<{}>;
    onContextMenuOpen: EventEmitter<{}>;
    onContextMenuClose: EventEmitter<{}>;
    onContextMenuItemClick: EventEmitter<{}>;
    onContextMenuCreate: EventEmitter<{}>;
    onDateChange: EventEmitter<{}>;
    onEditRecurrenceDialogOpen: EventEmitter<{}>;
    onEditRecurrenceDialogClose: EventEmitter<{}>;
    onEditDialogCreate: EventEmitter<{}>;
    onEditDialogOpen: EventEmitter<{}>;
    onEditDialogClose: EventEmitter<{}>;
    onViewChange: EventEmitter<{}>;
    __wireEvents__(): void;
}
