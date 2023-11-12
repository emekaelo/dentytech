interface IconWrapperConfig {
    bgColor: string;
    border?: string;
    children: React.ReactNode,
    padding?: string;
    width?: number
}

export const IconWrapper = ({bgColor, border, children, padding, width}: IconWrapperConfig) => {
    const styles = {
        'background-color': bgColor,
        'border-radius': '50%',
        width: `${width || 36}px`,
        height: `${width || 36}px`,
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        padding,
        border
    }
    return (
        <div style={styles}>
            {children}
        </div>
    );
};
