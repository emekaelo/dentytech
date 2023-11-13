import {IconWrapperConfig} from "../../models";


export const IconWrapper = ({bgColor, border, children, padding, width}: IconWrapperConfig) => {
    const styles = {
        backgroundColor: bgColor,
        borderRadius: '50%',
        width: `${width || 36}px`,
        height: `${width || 36}px`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding,
        border
    }
    return (
        <div style={styles}>
            {children}
        </div>
    );
};
