export interface ButtonProps {
    
    size?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    children?: React.ReactNode;
    onClick?: () => void;
}