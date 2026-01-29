import { DetailsComponent } from "./DetailsProp"

// const ASCII_LOGO = `


                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
//                                                                      ::                             
//                                                                    ::::                             
//                                                                    ---:                             
//                                                               ::: ----                              
//                                                             ::::  ----                              
//                                                           ------  ----                              
//                                                        --------  ----                               
//                                                      ----------  ----                               
//                                                    ------------ -===                                
//                                                 --------------  ====                                
//                                               -==-===========-  ====                                
//                                             =================  ====                                 
//                                           ===================  ====                                 
//                                        ====================== ====                                  
//                                      ================ ======  ====                                  
//                                    ================  =======  ====                                  
//                                 =================    ======= ====                                   
//                                ================      ======  ====                                   
//                                =============        =======  ===                                    
//                               ============          ======  ====                                    
//                               ==========           =======  ====                                    
//                               ++++++=   ==         =+++++= =+++                                     
//                              ++++++  =++++++       ++++++  ++++                                     
//                              ++++  ++++++++++++   +++++++  +++=                                     
//                              ++   +++++++++++++++ ++++++  ++++                                      
//                                    +++++++++++++++++++++  ++++                                      
//                                       ++*+++++++++++++++ ++++                                       
//                                         +**************  +++*                                       
//                                            ************  ***+                                       
//                                              *********  ****                                        
//                                                 ******  ****                                        
//                                                    *** ****                                         
//                                                        ****                                         
//                                                        ****                                         
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    

// `;

export const ProfilePage = () => {
  const startYear = Number(import.meta.env.VITE_EXP_YEAR) || 2023;
  const startMonth = Number(import.meta.env.VITE_EXP_MONTH) || 2026;

  return (
    <div className="flex flex-col items-center justify-center gap-4 mb-16">
      <img src="/logo.svg" alt="Profile" className="w-48 h-48" />

      {/* <pre className="font-mono text-xs bg-linear-to-tr from-pink-600 to-orange-300 bg-clip-text text-transparent">
        {ASCII_LOGO}
      </pre> */}
     

      <h1 className="font-bold text-xl bg-linear-to-tr from-pink-600 to-orange-300 bg-clip-text text-transparent">
        DHUWAARAKESH DHANANCHEZHIYAN
      </h1>

      <DetailsComponent
        designation="Fullstack Developer"
        exp={{
          startYear,
          startMonth,
        }}
        stack={['React.js', 'Express.js', 'PostgreSQL', 'Node.js']}
      />
    </div>
  );
};