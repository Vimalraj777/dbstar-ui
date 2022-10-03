import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormArray } from '@angular/forms';
import { SubServiceService } from 'src/app/Service/sub-service.service';
import { Router , ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-school-post',
  templateUrl: './school-post.component.html',
  styleUrls: ['./school-post.component.scss']
})
export class SchoolPostComponent implements OnInit {
  generalForm!:FormGroup;
  Data:any;
  id:any;
  data:any;
  schoolid:any;
  


  constructor(private fb:FormBuilder , private sub:SubServiceService , private route:Router , private active:ActivatedRoute) { }
  step=0;
  butt=0;
  index=new Array(19);



  ngOnInit(): void {
   
    // console.log(this.id);


    this.generalForm=this.fb.group({
      School1:this.fb.group({
        id:[],
        institutionName:[],
        state:[],
        urlName:[],
        officeEmailId:[],
        district:[],
        pincode:[],
        specialNeeds:[],
        yearOfEstablish:[],
        natureOfAffiliation:[],
        currentNoOfGirls:[],
        totalOfNonTeachingStaff:[],
      }),
      School2:this.fb.group({
        location:[],
        postalAddress:[],
        city:[],
        officialPhoneNumber:[],
        assessmentAcademicYear:[],
        gender:[],
        correspondentEmailId:[],
        schoolLevel:[],
        principalOrHeadMobileNo:[],
      }),
      School3:this.fb.group({
        totalNoOfTeachingStaff:[],
        totalBoys:[],
        correspondentName:[],
        medium:[],     
        currentNoOfStudents:[],
        correspondentMobileNo:[],
        nameOfPrincipal:[],
        principalOrHeadEmailId:[],
        principalOrHeadOfficePhoneNo:[],
      }),
      School4:this.fb.group({
        isInstituteRecognizedByGovt:[],
        nameOfBoardAffiliated:[],
        affiliationNo:[],
        yearOfAffiliation:[],
        isAffiliationPermanentOrTemp:[],
        conditionsOfAffiliation:[],
        minorityStausCertificate:[],
        christian:[],
        hindu:[],
        islam:[],
        others:[],
        nonBelievers:[],
        fireSafetyCertificate:[],
        sanitationCertificate:[],
        buildingSafetyCertificate:[],
      }),
      School5:this.fb.group({
        schoolOwnedBy:[],
        nameOfTheTrustOrCompany:[],
        isTrustOrCompanyRegistered:[],
        underWhichAct:[],
        yearOfRegistration:[],
        registrationNo:[],
        validityOfRegistrationPeriod:[],
        nameOfPresidentOrChairman:[],
        designationOfPresidentOrChairman:[],
        addressOfPresidentOrChairman:[],
        phoneNoOfPresidentOrChairman:[],
        emailAddressOfPresidentOrChairman:[],
      }),
      School6:this.fb.group({
        governingBodyOfTrustOrCompany:[],
        NoOfMembersInTrustOrCompany:[],
        tenureOfEachMemberInTrust:[],
        educativePastoralCommunityCouncil:[],
        membersOfEducativePastoralComCouncil:[],
        tenureOfEducativePastoralComCouncil:[],
        parentTeacherAssosiateExecuteBody:[],
        membersOfParentTeacherExecuteBody:[],
        tenureOfParentTeacherExecuteBody:[],
      }),
      
      School7:this.fb.group({
        studentAssociationCouncil:[],
        membersOfStudentAssociationCouncil:[],
        tenureOfStudentAssociationCouncil:[],
        generalGrieveOrComplaintCell:[],
        schoolManagementCommittee:[],
        constitutionOfManagementCommittee:[],
        membersOfManagementCommittee:[],
        tenureOfManagementCommittee:[],
      }),
      
      School8:this.fb.group({
        isSchoolLocatedInRentedOrOwnBuilding:[],
        areaOfSchoolCampus:[],
        builtUpArea:[],
        playGroundArea:[],
        noOfBuildingsOrFloors:[],
        isProvisionsAvailableDifferently:[],
        noOfStairCase:[],
        noOfLifts:[],
      }),
      School9:this.fb.group({
        classRooms:[],
        staffRooms:[],
        physicsLab:[],
        chemistryLab:[],
        biologyLab:[],
        mathsLab:[],
        computerScienceLab:[],
        languageLab:[],
        homeScienceLab:[],
        library:[],
        auditorium:[],
        counselorsRoom:[],
        visitorsParlor:[],
        prayerRoomChapel:[],
        sickRoomOrInfirmary:[],
        canteen:[],
        securityRoom:[],
        otherRoomsHalls:[],
        staffUrinalsOrToilets:[],
        studentUrinalsOrToilets:[],
        rooms:[],
        isChildNeedSpecialNeeds:[],
        teachersToHandleSpecialChild:[],
      }),
      School10:this.fb.group({
        boundaryWall:[],
        ifYesBoundaryWall:[],
        cctv:[],
        isDataSaved:[],
        noOfCameras:[],
        maleSecurityGuard:[],
        noOfMaleSecurity:[],
        femaleSecurityGuards:[],
        noOfFemaleSecurity:[],
        drinkingWaterFacility:[],
        properDrainageFacility:[],

      }),
      School11:this.fb.group({
        middayMealScheme:[],
        noOfSchoolBuses:[],
        gpsEnabledCamera:[],
        noOfLadyAttendor:[],
        firstAidKit:[],
        drinkingWater:[],
        noOfBusesSubContracted:[],
        govtFreeBusPassEligiblity:[],
        IsSchoolOffersFreeTransportFacility:[],
      }),
      School12:this.fb.group({
        libraryOpenTime:[],
        libraryCloseTime:[],
        totalNoOfLibraryBooks:[],
        totalNoOfLibraryMagazines:[],
        totalNoOfLibraryDailyNewspapers:[],
        totalNoOfEbooks:[],
        onlineAccessForLibraryBooks:[],
        seperateLibraryForPrimarySection:[],
        provisionForRemedialTeaching:[],
        televisionFacilityInSchool:[],
        digitalBoardsFacilityInSchool:[],
        multimediaFacilityInSchool:[],
        projectorFacilityInSchool:[],
        tapeRecorderFacilityInSchool:[],

      }),
      
      School13:this.fb.group({
      permanentMaleForPrincipalOrHM:[],
      permanentFeMaleForPrincipalOrHM:[],
      temporaryMaleForPrincipalOrHM:[],
      temporaryFeMaleForPrincipalOrHM:[],
      permanentMaleForVicePrincipalOrHM:[],
      permanentFeMaleForVicePrincipalOrHM:[],
      temporaryMaleForVicePrincipalOrHM:[],
      temporaryFeMaleForVicePrincipalOrHM:[],
      permanentMalePostGraduateTeachers:[],
      permanentFeMalePostGraduateTeachers:[],
      temporaryMalePostGraduateTeachers:[],
      temporaryFeMalePostGraduateTeachers:[],
      permanentMaleTrainedGraduateTeachers:[],
      permanentFeMaleTrainedGraduateTeachers:[],
      temporaryMaleTrainedGraduateTeachers:[],
      temporaryFeMaleTrainedGraduateTeachers:[],
      permanentMalePrimaryTeachers:[],
      permanentFeMalePrimaryTeachers:[],
      temporaryMalePrimaryTeachers:[],
      temporaryFeMalePrimaryTeachers:[],
      permanentMaleNurseryTrainedTeachers:[],
      permanentFeMaleNurseryTrainedTeachers:[],
      temporaryMaleNurseryTrainedTeachers:[],
      temporaryFeMaleNurseryTrainedTeachers:[],
      permanentMaleUntrainedTeachers:[],
      permanentFeMaleUntrainedTeachers:[],
      UTtmtemporaryMaleUntrainedTeachersale:[],
      temporaryFeMaleUntrainedTeachers:[],
      permanentMaleLibrarian:[],
      permanentFeMaleLibrarian:[],
      temporaryMaleLibrarian:[],
      temporaryFeMaleLibrarian:[],
      permanentMaleArtsDanceMusicTeachers:[],
      permanentFeMaleArtsDanceMusicTeachers:[],
      temporaryMaleArtsDanceMusicTeachers:[],
      temporaryFeMaleArtsDanceMusicTeachers:[],
      permanentMaleCounsilors:[],
      permanentFeMaleCounsilors:[],
      temporaryMaleCounsilors:[],
      temporaryFeMaleCounsilors:[],
      permanentMaleComputerLiteracy:[],
      permanentFeMaleComputerLiteracy:[],
      temporaryMaleComputerLiteracy:[],
      temporaryFeMaleComputerLiteracy:[],
      permanentMaleFaithMinisters:[],
      permanentFeMaleFaithMinisters:[], 
      temporaryMaleFaithMinisters:[],
      temporaryFeMaleFaithMinisters:[],
      permanentMaleNurse:[],
      permanentFeMaleNurse:[],
      temporaryMaleNurse:[],
      temporaryFeMaleNurse:[],
      permanentMalePTTeachers:[],
      permanentFeMalePTTeachers:[],
      temporaryMalePTTeachers:[],
      temporaryFeMalePTTeachers:[],

      }),
      School14:this.fb.group({
        permanentOfficeManagers:[],
        temporaryOfficeManagers:[],
        partTimeOfficeManagers:[],
        permanentOfficeAssistant:[],
        temporaryOfficeAssistant:[],
        partTimeOfficeAssistant:[],
        permanentClerks:[],
        temporaryClerks:[],
        partTimeClerks:[],
        permanentLabAttendants:[],
        temporaryLabAttendants:[],
        partTimeLabAttendants:[],
        permanentAccountant:[],
        temporaryAccountant:[],
        partTimeAccountant:[],
        permanentPeonsOrClerks:[],
        temporaryPeonsOrClerks:[],
        partTimePeonsOrClerks:[],
        permanentOthers:[],
        temporaryOthers:[],
        partTimeOthers:[],

      }),

      School15:this.fb.group({
        noOfActivitiesCarriedOut:[],
        noOfGroupsClubsMovementsPresent:[],
        noOfCommunityServicesDoneInLastYear:[],
        noOfSportsSchool:[],
        noOfSportsZonal:[],
        noOfSportsDistrict:[],
        noOfSportsState:[],
        noOfSportsNational:[],
        noOfSportsInternational:[],
        noOfCompetitionsParticipatedLastYearInSchool:[],
        noOfCompetitionsParticipatedLastYearInZonal:[],
        noOfCompetitionsParticipatedLastYearInDistrict:[],
        noOfCompetitionsParticipatedLastYearInState:[],
        noOfCompetitionsParticipatedLastYearInNational:[],
        noOfCompetitionsParticipatedLastYearInInterNational:[],
        noOfInterSchoolProgramsOrganizedInSchoolLevel:[],
        noOfInterSchoolProgramsOrganizedInZonalLevel:[],
        noOfInterSchoolProgramsOrganizedInDistrictLevel:[],
        noOfInterSchoolProgramsOrganizedInStateLevel:[],
        noOfInterSchoolProgramsOrganizedInNationalLevel:[],
        noOfInterSchoolProgramsOrganizedInInterNationalLevel:[],

      }),

      School16:this.fb.group({
        academicYearBeginMonth:[],
        academicYearEndMonth:[],
        noOfWorkingDaysIn21To22:[],
        noOfWorkingDaysIn20To21:[],
        noOfWorkingDaysIn19To20:[],
        hoursOfAcademicWorkEachDay21To22:[],
        hoursOfAcademicWorkEachDay20To21:[],
        hoursOfAcademicWorkEachDay19To20:[],
        totalInstructionalHours21To22:[],
        totalInstructionalHours20To21:[],
        totalInstructionalHours19To20:[],
        nonInstructionalWorkingDaysForStaffIn21To22:[],
        nonInstructionalWorkingDaysForStaffIn20To21:[],
        nonInstructionalWorkingDaysForStaffIn19To20:[],
        noOfHolidaysExceptNationalHolidays21To22:[],
        noOfHolidaysExceptNationalHolidays20To21:[],
        noOfHolidaysExceptNationalHolidays19To20:[],

      }),
      School17:this.fb.group({
        noOfTeachingPeriodPerWeek:[],
        noOfFaithPeriodsPerWeek:[],
        teachingPeriodDuration:[],
        noOfHoursForActivitiesInTheClubs:[],
        schoolTimeInSummerToCome:[],
        schoolTimeInSummerToOut :[],
        schoolTimeInWinterToCome:[],
        schoolTimeInWinterToOut:[],
        isSchoolWorkingInShifts:[],
      }),


      School18:this.fb.group({
        scholarship:this.fb.array([]),

      }),
      
      School19:this.fb.group({
        enrollment:this.fb.array([]),

      }),
      
    });


    this.schoolid=this.active.snapshot.params['id']
    console.log("school id",this.schoolid);
    if(typeof this.schoolid == 'undefined'){
      console.log('none');
    }
      
    else{
      //Put Method
      this.sub.getSchoolPost(this.schoolid).subscribe((arg:any)=>{
        console.log(arg);
        this.generalForm.patchValue(arg);
        this.data=arg;

        if(this.data.School18['scholarship']){
          this.data.School18['scholarship'].forEach((element:any) => {
        
            this.Scholarship().push(this.loadScholarship(element))        
         });
        }

        if(this.data.School19['enrollment']){
          this.data.School19['enrollment'].forEach((element:any) => {
         
            this.Enrollment().push(this.loadEnrollment(element))        
         });

        }
      })
      
      
    }

     this.next();
    
  }

  Scholarship():FormArray{
      return this.generalForm.get('School18.scholarship') as FormArray;
  }
  Enrollment():FormArray{
    return this.generalForm.get('School19.enrollment') as FormArray;
  }

  newScholarship():FormGroup{
   return this.fb.group({
      scholarshipName:[],
      scholarshipBoys:[],
      girls:[],
      govt:[],
      pvt:[]
    
    });
  }


  newEnrollment():FormGroup{
    return this.fb.group({
       enrol_class:[],
       enrol_no_of_section:[],
       enrol_total_boys:[],
       enrol_total_girls:[],
       enrol_total_students:[]
     
     });
   }

  loadScholarship(data : any):FormGroup{
    return this.fb.group({
       scholarshipName:[data[0]],
       scholarshipBoys:[data[1]],
       girls:[data[2]],
       govt:[data[3]],
       pvt:[data[4]]
     
     });
   }

   loadEnrollment(data : any):FormGroup{
    return this.fb.group({
       enrol_class:[data[0]],
       enrol_no_of_section:[data[1]],
       enrol_total_boys:[data[2]],
       enrol_total_girls:[data[3]],
       enrol_total_students:[data[4]]
     
     });
   }


  addScholarship(){
    this.Scholarship().push(this.newScholarship());
  }

  addEnrollment(){
    this.Enrollment().push(this.newEnrollment());
  }

  removeScholarship(i:any){
    this.Scholarship().removeAt(i)
  }


  removeEnrollment(i:any){
    this.Enrollment().removeAt(i)
  }

  // loadData(){
  //   this.generalForm=this.fb.group({
  //     id:[this.data.id],
  //     instiName:[this.data.instiName],
  //     state:[this.data.state],
  //     urlName:[this.data.urlName],
  //     location:[this.data.location],
  //     postalAddress:[this.data.postalAddress],
  //     city:[this.data.city],
  //     totalNoOfTeachingStaff:[this.data.totalNoOfTeachingStaff],
  //     totalBoys:[this.data.totalBoys],
  //     correspondentName:[this.data.correspondentName],
  //     medium:[this.data.medium],
  //     officeEmailId:[this.data.officeEmailId],
  //     specialNeeds:[this.data.specialNeeds],
  //     district:[this.data.district],
  //     pincode:[this.data.pincode],
  //     officialPhoneNumber:[this.data.officialPhoneNumber],
  //     assessmentAcademicYear:[this.data.assessmentAcademicYear],
  //     gender:[this.data.gender],
  //     currentNoOfStudents:[this.data.currentNoOfStudents],
  //     correspondentMobileNo:[this.data.correspondentMobileNo],
  //     nameOfPrincipal:[this.data.nameOfPrincipal],
  //     yearOfEstablish:[this.data.yearOfEstablish],
  //     natureOfAffiliation:[this.data.natureOfAffiliation],
  //     currentNoOfGirls:[this.data.currentNoOfGirls],
  //     totalOfNonTeachingStaff:[this.data.totalOfNonTeachingStaff],
  //     correspondentEmailId:[this.data.correspondentEmailId],
  //     schoolLevel:[this.data.schoolLevel],
  //     principalOrHeadMobileNo:[this.data.principalOrHeadMobileNo],
  //     principalOrHeadEmailId:[this.data.principalOrHeadEmailId],
  //     principalOrHeadOfficePhoneNo:[this.data.principalOrHeadOfficePhoneNo],
  //     isInstituteRecognizedByGovt:[this.data.isInstituteRecognizedByGovt],
  //     nameOfBoardAffiliated:[this.data.nameOfBoardAffiliated],
  //     affiliationNo:[this.data.affiliationNo],
  //     yearOfAffiliation:[this.data.yearOfAffiliation],
  //     isAffiliationPermanentOrTemp:[this.data.isAffiliationPermanentOrTemp],
  //     conditionsOfAffiliation:[this.data.conditionsOfAffiliation],
  //     minorityStausCertificate:[this.data.minorityStausCertificate],
  //     christian:[this.data.christian],
  //     hindu:[this.data.hindu],
  //     islam:[this.data.islam],
  //     others:[this.data.others],
  //     nonBelievers:[this.data.nonBelievers],
  //     fireSafetyCertificate:[this.data.fireSafetyCertificate],
  //     sanitationCertificate:[this.data.sanitationCertificate],
  //     buildingSafetyCertificate:[this.data.buildingSafetyCertificate],
  //     schoolOwnedBy:[this.data.schoolOwnedBy],
  //     nameOfTheTrustOrCompany:[this.data.nameOfTheTrustOrCompany],
  //     isTrustOrCompanyRegistered:[this.data.isTrustOrCompanyRegistered],
  //     underWhichAct:[this.data.underWhichAct],
  //     yearOfRegistration:[this.data.yearOfRegistration],
  //     registrationNo:[this.data.registrationNo],
  //     validityOfRegistrationPeriod:[this.data.validityOfRegistrationPeriod],
  //     nameOfPresidentOrChairman:[this.data.nameOfPresidentOrChairman],
  //     designationOfPresidentOrChairman:[this.data.designationOfPresidentOrChairman],
  //     addressOfPresidentOrChairman:[this.data.addressOfPresidentOrChairman],
  //     phoneNoOfPresidentOrChairman:[this.data.phoneNoOfPresidentOrChairman],
  //     emailAddressOfPresidentOrChairman:[this.data.emailAddressOfPresidentOrChairman],
  //     governingBodyOfTrustOrCompany:[this.data.governingBodyOfTrustOrCompany],
  //     governingBodyOfTrustOrCompany:[this.data.governingBodyOfTrustOrCompany],
  //     tenureOfEachMemberInTrust:[this.data.tenureOfEachMemberInTrust],
  //     epcc:[this.data.epcc],
  //     membersOfEducativePastoralComCouncil:[this.data.membersOfEducativePastoralComCouncil],
  //     tenureOfEducativePastoralComCouncil:[this.data.tenureOfEducativePastoralComCouncil],
  //     pt:[this.data.pt],
  //     membersOfParentTeacherExecuteBody:[this.data.membersOfParentTeacherExecuteBody],
  //     tenureOfParentTeacherExecuteBody:[this.data.tenureOfParentTeacherExecuteBody],
  //     studentAssociationCouncil:[this.data.studentAssociationCouncil],
  //     membersOfStudentAssociationCouncil:[this.data.membersOfStudentAssociationCouncil],
  //     tenureOfStudentAssociationCouncil:[this.data.tenureOfStudentAssociationCouncil],
  //     generalGrieveOrComplaintCell:[this.data.generalGrieveOrComplaintCell],
  //     schoolManagementCommittee:[this.data.schoolManagementCommittee],
  //     constitutionOfManagementCommittee:[this.data.constitutionOfManagementCommittee],
  //     membersOfManagementCommittee:[this.data.membersOfManagementCommittee],
  //     tenureOfManagementCommittee:[this.data.tenureOfManagementCommittee],
  //     isSchoolLocatedInRentedOrOwnBuilding:[this.data.isSchoolLocatedInRentedOrOwnBuilding],
  //     areaOfSchoolCampus:[this.data.areaOfSchoolCampus],
  //     builtUpArea:[this.data.builtUpArea],
  //     playGroundArea:[this.data.playGroundArea],
  //     noOfBuildingsOrFloors:[this.data.noOfBuildingsOrFloors],
  //     isProvisionsAvailableDifferently:[this.data.isProvisionsAvailableDifferently],
  //     noOfStairCase:[this.data.noOfStairCase],
  //     noOfLifts:[this.data.noOfLifts],
  //     classRooms:[this.data.classRooms],
  //     staffRooms:[this.data.staffRooms],
  //     pl:[this.data.pl],
  //     cl:[this.data.cl],
  //     bl:[this.data.bl],
  //     ml:[this.data.ml],
  //     csl:[this.data.csl],
  //     ll:[this.data.ll],
  //     hsl:[this.data.hsl],
  //     library:[this.data.library],
  //     audit:[this.data.audit],
  //     cr:[this.data.cr],
  //     up:[this.data.up],
  //     prc:[this.data.prc],
  //     sickRoomOrInfirmary:[this.data.sickRoomOrInfirmary],
  //     canteen:[this.data.canteen],
  //     sr:[this.data.sr],
  //     orh:[this.data.orh],
  //     sut:[this.data.sut],
  //     stut:[this.data.stut],
  //     rooms:[this.data.rooms],
  //     isChildNeedSpecialNeeds:[this.data.isChildNeedSpecialNeeds],
  //     teachersToHandleSpecialChild:[this.data.teachersToHandleSpecialChild],
  //     bw:[this.data.bw],
  //     ifYesBoundaryWall:[this.data.ifYesBoundaryWall],
  //     cctv:[this.data.cctv],
  //     ds:[this.data.ds],
  //     noOfCameras:[this.data.noOfCameras],
  //     maleSecurityGuard:[this.data.maleSecurityGuard],
  //     noOfMaleSecurity:[this.data.noOfMaleSecurity],
  //     femalesg:[this.data.femalesg],
  //     noOfFemaleSecurity:[this.data.noOfFemaleSecurity],
  //     drinkingWaterFacility:[this.data.drinkingWaterFacility],
  //     properDrainageFacility:[this.data.properDrainageFacility],
  //     middayMealScheme:[this.data.middayMealScheme],
  //     noOfSchoolBuses:[this.data.noOfSchoolBuses],
  //     gpsEnabledCamera:[this.data.gpsEnabledCamera],
  //     noOfLadyAttendor:[this.data.noOfLadyAttendor],
  //     firstAidKit:[this.data.firstAidKit],
  //     drinkingWater:[this.data.drinkingWater],
  //     noOfBusesSubContracted:[this.data.noOfBusesSubContracted],
  //     govtFreeBusPassEligiblity:[this.data.govtFreeBusPassEligiblity],
  //     IsSchoolOffersFreeTransportFacility:[this.data.IsSchoolOffersFreeTransportFacility],
  //     // mmfainsch:[this.data.mmfainsch],
  //     libraryOpenTime:[this.data.libraryOpenTime],
  //     libraryCloseTime:[this.data.libraryCloseTime],
  //     totalNoOfLibraryBooks:[this.data.totalNoOfLibraryBooks],
  //     totalNoOfLibraryMagazines:[this.data.totalNoOfLibraryMagazines],
  //     totalNoOfLibraryDailyNewspapers:[this.data.totalNoOfLibraryDailyNewspapers],
  //     totalNoOfEbooks:[this.data.totalNoOfEbooks],
  //     onlineAccessForLibraryBooks:[this.data.onlineAccessForLibraryBooks],
  //     seperateLibraryForPrimarySection:[this.data.seperateLibraryForPrimarySection],
  //     provisionForRemedialTeaching:[this.data.provisionForRemedialTeaching],
  //     televisionFacilityInSchool:[this.data.televisionFacilityInSchool],
  //     digitalBoardsFacilityInSchool:[this.data.digitalBoardsFacilityInSchool],
  //     multimediaFacilityInSchool:[this.data.multimediaFacilityInSchool],
  //     projectorFacilityInSchool:[this.data.projectorFacilityInSchool],
  //     tapeRecorderFacilityInSchool:[this.data.tapeRecorderFacilityInSchool],


  //     permanentMaleForPrincipalOrHM:[this.data.permanentMaleForPrincipalOrHM],
  //     permanentFeMaleForPrincipalOrHM:[this.data.permanentFeMaleForPrincipalOrHM],
  //     temporaryMaleForPrincipalOrHM:[this.data.temporaryMaleForPrincipalOrHM],
  //     temporaryFeMaleForPrincipalOrHM:[this.data.temporaryFeMaleForPrincipalOrHM],
  //     // phmTmale:[this.data.phmTmale],
  //     // phmTfmale:[this.data.phmTfmale],
  //     permanentMaleForVicePrincipalOrHM:[this.data.permanentMaleForVicePrincipalOrHM],
  //     permanentFeMaleForVicePrincipalOrHM:[this.data.permanentFeMaleForVicePrincipalOrHM],
  //     temporaryMaleForVicePrincipalOrHM:[this.data.temporaryMaleForVicePrincipalOrHM],
  //     temporaryFeMaleForVicePrincipalOrHM:[this.data.temporaryFeMaleForVicePrincipalOrHM],
  //     // vpTmale:[this.data.vpTmale],
  //     // vpTfmale:[this.data.vpTfmale],
  //     permanentMalePostGraduateTeachers:[this.data.permanentMalePostGraduateTeachers],
  //     permanentFeMalePostGraduateTeachers:[this.data.permanentFeMalePostGraduateTeachers],
  //     temporaryMalePostGraduateTeachers:[this.data.temporaryMalePostGraduateTeachers],
  //     temporaryFeMalePostGraduateTeachers:[this.data.temporaryFeMalePostGraduateTeachers],
  //     // PGTTmale:[this.data.PGTTmale],
  //     // PGTTfmale:[this.data.PGTTfmale],
  //     permanentMaleTrainedGraduateTeachers:[this.data.permanentMaleTrainedGraduateTeachers],
  //     permanentFeMaleTrainedGraduateTeachers:[this.data.permanentFeMaleTrainedGraduateTeachers],
  //     temporaryMaleTrainedGraduateTeachers:[this.data.temporaryMaleTrainedGraduateTeachers],
  //     temporaryFeMaleTrainedGraduateTeachers:[this.data.temporaryFeMaleTrainedGraduateTeachers],
  //     // TGTTmale:[this.data.TGTTmale],
  //     // TGTTfmale:[this.data.TGTTfmale],
  //     permanentMalePrimaryTeachers:[this.data.permanentMalePrimaryTeachers],
  //     permanentFeMalePrimaryTeachers:[this.data.permanentFeMalePrimaryTeachers],
  //     temporaryMalePrimaryTeachers:[this.data.temporaryMalePrimaryTeachers],
  //     temporaryFeMalePrimaryTeachers:[this.data.temporaryFeMalePrimaryTeachers],
  //     // PRTTmale:[this.data.PRTTmale],
  //     // PRTTfmale:[this.data.PRTTfmale],
  //     permanentMaleNurseryTrainedTeachers:[this.data.permanentMaleNurseryTrainedTeachers],
  //     permanentFeMaleNurseryTrainedTeachers:[this.data.permanentFeMaleNurseryTrainedTeachers],
  //     temporaryMaleNurseryTrainedTeachers:[this.data.temporaryMaleNurseryTrainedTeachers],
  //     temporaryFeMaleNurseryTrainedTeachers:[this.data.temporaryFeMaleNurseryTrainedTeachers],
  //     // NTTTmale:[this.data.NTTTmale],
  //     // NTTTfmale:[this.data.NTTTfmale],
  //     permanentMaleUntrainedTeachers:[this.data.permanentMaleUntrainedTeachers],
  //     permanentFeMaleUntrainedTeachers:[this.data.permanentFeMaleUntrainedTeachers],
  //     UTtmale:[this.data.UTtmale],
  //     UTtfmale:[this.data.UTtfmale],
  //     // UTTmale:[this.data.UTTmale],
  //     // UTTfmale:[this.data.UTTfmale],
  //     Lpmale:[this.data.Lpmale],
  //     Lpfmale:[this.data.Lpfmale],
  //     Ltmale:[this.data.Ltmale],
  //     Ltfmale:[this.data.Ltfmale],
  //     // LTmale:[this.data.LTmale],
  //     // LTfmale:[this.data.LTfmale],
  //     Artspmale:[this.data.Artspmale],
  //     Artspfmale:[this.data.Artspfmale],
  //     Artstmale:[this.data.Artstmale],
  //     Artstfmale:[this.data.Artstfmale],
  //     // ArtsTmale:[this.data.ArtsTmale],
  //     // ArtsTfmale:[this.data.ArtsTfmale],
  //     Cpmale:[this.data.Cpmale],
  //     Cpfmale:[this.data.Cpfmale],
  //     Ctmale:[this.data.Ctmale],
  //     Ctfmale:[this.data.Ctfmale],
  //     // CTmale:[this.data.CTmale],
  //     // CTfmale:[this.data.CTfmale],
  //     CLpmale:[this.data.CLpmale],
  //     CLpfmale:[this.data.CLpfmale],
  //     CLtmale:[this.data.CLtmale],
  //     CLtfmale:[this.data.CLtfmale],
  //     // CLTmale:[this.data.CLTmale],
  //     // CLTfmale:[this.data.CLTfmale],
  //     FMpmale:[this.data.FMpmale],
  //     FMpfmale:[this.data.FMpfmale],
  //     FMtmale:[this.data.FMtmale],
  //     FMtfmale:[this.data.FMtfmale],
  //     // FMTmale:[this.data.FMTmale],
  //     // FMTfmale:[this.data.FMTfmale],
  //     Nursepmale:[this.data.Nursepmale],
  //     Nursepfmale:[this.data.Nursepfmale],
  //     Nursetmale:[this.data.Nursetmale],
  //     Nursetfmale:[this.data.Nursetfmale],
  //     // NurseTmale:[this.data.NurseTmale],
  //     // NurseTfmale:[this.data.NurseTfmale],
  //     PTpmale:[this.data.PTpmale],
  //     PTpfmale:[this.data.PTpfmale],
  //     PTtmale:[this.data.PTtmale],
  //     PTtfmale:[this.data.PTtfmale],
  //     // PTTmale:[this.data.PTTmale],
  //     // PTTfmale:[this.data.PTTfmale],
  //     // Totalpmale:[this.data.Totalpmale],
  //     // Totalpfmale:[this.data.Totalpfmale],
  //     // Totaltmale:[this.data.Totaltmale],
  //     // Totaltfmale:[this.data.Totaltfmale],
  //     // TotalTmale:[this.data.TotalTmale],
  //     // TotalTfmale:[this.data.TotalTfmale],

  //     ofmaper:[this.data.ofmaper],
  //     ofmatemp:[this.data.ofmatemp],
  //     ofmapart:[this.data.ofmapart],
  //     // ofmatotal:[this.data.ofmatotal],
  //     ofasper:[this.data.ofasper],
  //     ofastemp:[this.data.ofastemp],
  //     ofaspart:[this.data.ofaspart],
  //     // ofastotal:[this.data.ofastotal],
  //     clerkper:[this.data.clerkper],
  //     clerktemp:[this.data.clerktemp],
  //     clerkpart:[this.data.clerkpart],
  //     // clerktotal:[this.data.clerktotal],
  //     labper:[this.data.labper],
  //     labtemp:[this.data.labtemp],
  //     labpart:[this.data.labpart],
  //     // labtotal:[this.data.labtotal],
  //     accountper:[this.data.accountper],
  //     accounttemp:[this.data.accounttemp],
  //     accountpart:[this.data.accountpart],
  //     // accounttotal:[this.data.accounttotal],
  //     peonsper:[this.data.peonsper],
  //     peonstemp:[this.data.peonstemp],
  //     peonspart:[this.data.peonspart],
  //     // peonstotal:[this.data.peonstotal],
  //     othersper:[this.data.othersper],
  //     otherstemp:[this.data.otherstemp],
  //     otherspart:[this.data.otherspart],
  //     // otherstotal:[this.data.otherstotal],

  //     no_of_activities:[this.data.no_of_activities],
  //     no_of_groups:[this.data.no_of_groups],
  //     no_of_community:[this.data.no_of_community],
  //     no_of_sports_school:[this.data.no_of_sports_school],
  //     no_of_sports_zonal:[this.data.no_of_sports_zonal],
  //     no_of_sports_district:[this.data.no_of_sports_district],
  //     no_of_sports_state:[this.data.no_of_sports_state],
  //     no_of_sports_national:[this.data.no_of_sports_national],
  //     no_of_sports_international:[this.data.no_of_sports_international],
  //     no_of_competition_school:[this.data.no_of_competition_school],
  //     no_of_competition_zonal:[this.data.no_of_competition_zonal],
  //     no_of_competition_district:[this.data.no_of_competition_district],
  //     no_of_competition_state:[this.data.no_of_competition_state],
  //     no_of_competition_national:[this.data.no_of_competition_national],
  //     no_of_competition_international:[this.data.no_of_competition_international],
  //     no_of_interprograms_school:[this.data.no_of_interprograms_school],
  //     no_of_interprograms_zonal:[this.data.no_of_interprograms_zonal],
  //     no_of_interprograms_district:[this.data.no_of_interprograms_district],
  //     no_of_interprograms_state:[this.data.no_of_interprograms_state],
  //     no_of_interprograms_national:[this.data.no_of_interprograms_national],
  //     no_of_interprograms_international:[this.data.no_of_interprograms_international],

  //     acad_year_begins:[this.data.acad_year_begins],
  //     acad_year_ends:[this.data.acad_year_ends],
  //     workingdays_21_22:[this.data.workingdays_21_22],
  //     workingdays_20_21:[this.data.workingdays_20_21],
  //     workingdays_19_20:[this.data.workingdays_19_20],
  //     eachday_workhours_21_22:[this.data.eachday_workhours_21_22],
  //     eachday_workhours_20_21:[this.data.eachday_workhours_20_21],
  //     eachday_workhours_19_20:[this.data.eachday_workhours_19_20],
  //     totalhours_21_22:[this.data.totalhours_21_22],
  //     totalhours_20_21:[this.data.totalhours_20_21],
  //     totalhours_19_20:[this.data.totalhours_19_20],
  //     non_instruct_workdays_21_22:[this.data.non_instruct_workdays_21_22],
  //     non_instruct_workdays_20_21:[this.data.non_instruct_workdays_20_21],
  //     non_instruct_workdays_19_20:[this.data.non_instruct_workdays_19_20],
  //     holiday_except_holidays_21_22:[this.data.holiday_except_holidays_21_22],
  //     holiday_except_holidays_20_21:[this.data.holiday_except_holidays_20_21],
  //     holiday_except_holidays_19_20:[this.data.holiday_except_holidays_19_20],
  //     teaching_periods_perweek:[this.data.teaching_periods_perweek],
  //     faith_periods_perweek:[this.data.faith_periods_perweek],
  //     period_duration:[this.data.period_duration],
  //     totalhours_forclubs:[this.data.totalhours_forclubs],
  //     summer_timein:[this.data.summer_timein],
  //     summer_timeout:[this.data.summer_timeout],
  //     winter_timein:[this.data.winter_timein],
  //     winter_timeout:[this.data.winter_timeout],
  //     school_shift:[this.data.school_shift],


      

      
  //   })

  // }

  next(){
    this.step +=1; 
  }
  previous(){
    this.step -=1;
  }

  but(id:any){
    this.step=this.butt+id;
    
  }



  // if you want to register through this UI just uncomment it and use it for post method

  // submit(data1:any){
  //   console.log("data",this.generalForm.value);

  //   this.sub.po(this.generalForm.controls[data1].value).subscribe((data:any)=>{
  //     console.log(data);
  //     this.Data=data;
  //     Swal.fire({
  //             title:'Saved Successfully',
  //             showConfirmButton:false,
  //             text:'',
  //             icon:'success',
  //             timer:1500
  //           })
  //     this.route.navigate(['/home'])

  //   })
  //   console.log("data",this.Data);
  // }




  submit(data:any){
    if(typeof this.schoolid=='undefined'){
      // console.log("hi this is vimal");
      var submitData = Object.assign({'profileId':this.generalForm.get('School1.id')?.value} , this.generalForm.controls[data].value)
      this.sub.postSchoolPost(submitData).subscribe((data:any)=>{
        console.log(data);
        Swal.fire({
          title:'Saved Successfully',
          showConfirmButton:false,
          text:'',
          icon:'success',
          timer:1500
        })
      })
      

    }
    else{
    this.sub.updatePostSchool(this.generalForm.controls[data].value).subscribe((data:any)=>{
      console.log(data);
      // this.data='mercy'+data
      this.Data=data;
      Swal.fire({
        title:'Updated Successfully',
        showConfirmButton:false,
        text:'',
        icon:'success',
        timer:1500
      })

    })
  }
  }

  back(){
    this.route.navigate(['/home/viewschool'])
  }
  }
 
