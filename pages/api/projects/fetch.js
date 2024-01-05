import Projects from "@data/Projects";

export default function fetchHandler(req, res) {
    const { filterType } = req.body;
    
    try {
        switch(filterType) {
            case 'ALL':
                res.status(200).json({success: true, Projects})
                break;
                
            case 'COMPLETED':
                res.status(200).json({success: true, projects: Projects.filter(p => p.status === 'COMPLETED')})
                break;
    
            case 'NON_COMPLETED':
                res.status(200).json({success: true, projects: Projects.filter(p => p.status === 'NON_COMPLETED')})
                break;
    
            default:
                res.status(404).json({success: false, message: 'Undefined filter type'});
                break;
        }
    } catch (err) {
        res.status(500).json({success: false, message: 'An error occured', error: err})
    }
}