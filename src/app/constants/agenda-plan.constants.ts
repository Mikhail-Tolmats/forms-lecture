import { NativeFormsRoutes, Paths } from "./paths";

export type AgendaElement = {
    title: string;
    url: Paths;
    subcategories?: any[];
};

export const agendaElements: AgendaElement[] = [
    {
        title: "Native forms",
        url: Paths.NATIVE_FORMS,
        subcategories: [
            {
                title: "Overview",
                url: `${Paths.NATIVE_FORMS}/${NativeFormsRoutes.OVERVIEW}`,
            },
            {
                title: "Tags",
                url: `${Paths.NATIVE_FORMS}/${NativeFormsRoutes.TAGS}`,
            },
        ],
    },
    {
        title: "Template driven forms",
        url: Paths.TEMPLATE_DRIVEN_FORMS,
    },
    {
        title: "Reactive forms",
        url: Paths.REACTIVE_FORMS,
        subcategories: [
            {
                title: "Standalone input",
                url: "/reactive/standalone"
            },
            {
                title: "Simple Reactive form",
                url: "/reactive/simple-reactive-form"
            },
            {
                title: "Nested form",
                url: "/reactive/nested-forms"
            },
            {
                title: "Validation. Built-in",
                url: "/reactive/reactive-form-validation"
            },
            {
                title: "Validation. Custom.Sync",
                url: "/reactive/custom-sync-validator",
            },
            {
                title: "Validation. Custom. Async.",
                url: "/reactive/custom-async-validator",
            },
            {
                title: "Validation. Custom. Crossfield.",
                url: "/reactive/custom-cross-field-validator",
            },
            {
                title: "ControlValueAccessor",
                url: "/reactive/custom-contol-value-accessor",
            },
        ]
    },
];