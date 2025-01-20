export default function ApplicationLogo({ logoPath = '/gkmcc-logo.svg', className = '', ...props }) {
    return (
        <img
            {...props}
            src={logoPath}
            alt="Application Logo"
            className={`object-contain ${className}`}
        />
    );
}
