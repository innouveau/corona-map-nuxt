export default defineAppConfig({
    ui: {
        colors: {
            primary: 'blue',
            secondary: 'black',
        },
        inputMenu: {
            slots: {
                root: 'relative inline-flex items-center w-full',
            }
        },
        slider: {
            slots: {
                root: 'relative flex items-center select-none touch-none',
                track: 'relative bg-white overflow-hidden rounded-full grow',
                range: 'absolute rounded-full bg-secondary',
                thumb: 'rounded-full bg-default ring-2 focus-visible:outline-2 focus-visible:outline-offset-2'
            },
            variants: {
                color: {
                    primary: {
                        range: 'bg-primary',
                        thumb: 'ring-primary focus-visible:outline-primary/50'
                    },
                    secondary: {
                        range: 'bg-secondary',
                        thumb: 'ring-secondary focus-visible:outline-secondary/50'
                    },
                    success: {
                        range: 'bg-success',
                        thumb: 'ring-success focus-visible:outline-success/50'
                    },
                    info: {
                        range: 'bg-info',
                        thumb: 'ring-info focus-visible:outline-info/50'
                    },
                    warning: {
                        range: 'bg-warning',
                        thumb: 'ring-warning focus-visible:outline-warning/50'
                    },
                    error: {
                        range: 'bg-error',
                        thumb: 'ring-error focus-visible:outline-error/50'
                    },
                    neutral: {
                        range: 'bg-inverted',
                        thumb: 'ring-inverted focus-visible:outline-inverted/50'
                    }
                },
                size: {
                    xs: {
                        thumb: 'size-3'
                    },
                    sm: {
                        thumb: 'size-3.5'
                    },
                    md: {
                        thumb: 'size-4'
                    },
                    lg: {
                        thumb: 'size-4.5'
                    },
                    xl: {
                        thumb: 'size-5'
                    }
                },
                orientation: {
                    horizontal: {
                        root: 'w-full',
                        range: 'h-full'
                    },
                    vertical: {
                        root: 'flex-col h-full',
                        range: 'w-full'
                    }
                },
                disabled: {
                    true: {
                        root: 'opacity-75 cursor-not-allowed'
                    }
                }
            },
            compoundVariants: [
                {
                    orientation: 'horizontal',
                    size: 'xs',
                    class: {
                        track: 'h-[6px]'
                    }
                },
                {
                    orientation: 'horizontal',
                    size: 'sm',
                    class: {
                        track: 'h-[7px]'
                    }
                },
                {
                    orientation: 'horizontal',
                    size: 'md',
                    class: {
                        track: 'h-[1px]'
                    }
                },
                {
                    orientation: 'horizontal',
                    size: 'lg',
                    class: {
                        track: 'h-[9px]'
                    }
                },
                {
                    orientation: 'horizontal',
                    size: 'xl',
                    class: {
                        track: 'h-[10px]'
                    }
                },
                {
                    orientation: 'vertical',
                    size: 'xs',
                    class: {
                        track: 'w-[6px]'
                    }
                },
                {
                    orientation: 'vertical',
                    size: 'sm',
                    class: {
                        track: 'w-[7px]'
                    }
                },
                {
                    orientation: 'vertical',
                    size: 'md',
                    class: {
                        track: 'w-[8px]'
                    }
                },
                {
                    orientation: 'vertical',
                    size: 'lg',
                    class: {
                        track: 'w-[9px]'
                    }
                },
                {
                    orientation: 'vertical',
                    size: 'xl',
                    class: {
                        track: 'w-[10px]'
                    }
                }
            ],
            defaultVariants: {
                size: 'md',
                color: 'primary'
            }
        }
    }
})

