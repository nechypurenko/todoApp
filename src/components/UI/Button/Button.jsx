import * as styled from './Button.styled'


export const Button = ({ label, icon, type, disabled, onClick}) => {

    const iconColor = type === 'primary' ? 'white' : 'black';
    const IconComponent = icon;

    return(
        <styled.StyledButton
            data-testid={`button-${type}`}
            type={type} 
            disabled={disabled}
            onClick={onClick} >
            {IconComponent && <IconComponent color={iconColor}/>}
            {label}
    </styled.StyledButton>
    )
    
};