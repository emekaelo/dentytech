export const IconWrapper = ({bgColor, border, children, padding}: {bgColor: string; border?: string; children: React.ReactNode, padding?: string}) => {
    const styles = {
        'background-color': bgColor,
        'border-radius': '50%',
        width: '100%',
        height: '100%',
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
