import ArchiveBox from "../ArchiveBox/ArchiveBox";

const ArchiveBody = ({archivess}) => {
    
    return (
        <div className="w-3/4">
              <div className="space-y-2">
                  {
                    archivess.map(archives => <ArchiveBox key={archives._id} archives={archives}>

                    </ArchiveBox>)
                  }
              </div>
        </div>
    );
};
export default ArchiveBody;