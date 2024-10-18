import React, { useState, useEffect } from 'react'; 
import { Link } from "react-router-dom";
import ServiceProvidersDataService from "../services/serviceproviders";
import { Cog6ToothIcon, UserCircleIcon, PowerIcon } from "@heroicons/react/24/solid"; 
import { Sidebar } from '../components'; 
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon, TrashIcon } from "@heroicons/react/24/solid"; 
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";


const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Inactive",
    value: "inactive",
  },
];

const TABLE_HEAD = ["Fullname", "Profession", "Status", "Clinic Name", "Actions"];

const ServiceProviders = () => {
  const [open, setOpen] = React.useState(false);
  const handleEditOpen = () => setOpen(!open);

  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const handleDeleteOpen = () => setDeleteOpen(!deleteOpen);

  const [serviceProviders, setServiceProviders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const providersPerPage = 5;

  useEffect(() => {
    getServiceProviders();
  }, []);
  
  
  const getServiceProviders = async() => {
    const data = await ServiceProvidersDataService.getAllServiceProviders();
    console.log(data.docs);
    setServiceProviders(data.docs.map((doc) =>({ ...doc.data(), id: doc.id})))
  };

  const deleteHandler = async(id) => {
    await ServiceProvidersDataService.deleteServiceProvider(id);
    getServiceProviders();
  }

  const [dropdownOpen, setDropdownOpen] = useState(false); // Initialize state for dropdown visibility

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
  };

    // Pagination logic
    const indexOfLastProvider = currentPage * providersPerPage;
    const indexOfFirstProvider = indexOfLastProvider - providersPerPage;
    const currentProviders = serviceProviders.slice(indexOfFirstProvider, indexOfLastProvider);
  
    const nextPage = () => {
      if (currentPage < Math.ceil(serviceProviders.length / providersPerPage)) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const prevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };


  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-6 bg-white">
          {/* Title */}
          <h1 className="font-poppins text-[24px] text-[#757575] font-light"></h1>

          {/* Profile Dropdown */}
          <div className="relative">
            <button className="flex items-center space-x-2 focus:outline-none" onClick={toggleDropdown}>
              <img
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                <Link to="/Profile">
                  <a className="flex items-center px-4 py-2 hover:bg-gray-100 font-poppins">
                    <UserCircleIcon className="h-5 w-5 mr-2" />
                    My Profile
                  </a>
                </Link>
                <Link to="/Settings">
                  <a className="flex items-center px-4 py-2 hover:bg-gray-100 font-poppins">
                    <Cog6ToothIcon className="h-5 w-5 mr-2" />
                    Settings
                  </a>
                </Link>
                <Link to="/LoginPage">
                  <a className="flex items-center px-4 py-2 hover:bg-gray-100 font-poppins">
                    <PowerIcon className="h-5 w-5 mr-2" />
                    Logout
                  </a>
                </Link>
              </div>
            )}
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 px-6 py-4">
          <h1 className="font-poppins text-[24px] text-black font-bold mb-6">Service Providers</h1>

          <Card className="w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
              
            <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Members list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all service providers
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Button variant="text" className="flex items-center gap-3" onClick={getServiceProviders}>
            Refresh Table
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </Button>
            <Button variant="outlined" className="flex items-center gap-3" size="sm"> 
              <UserPlusIcon strokeWidth={2} className="h-4 w-4"  /> Add Service Provider
            </Button>
          </div>
        </div>
              
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <Tabs value="all" className="w-full md:w-max">
                  <TabsHeader>
                    {TABS.map(({ label, value }) => (
                      <Tab key={value} value={value}>
                        &nbsp;&nbsp;{label}&nbsp;&nbsp;
                      </Tab>
                    ))}
                  </TabsHeader>
                </Tabs>
                <div className="w-full md:w-72">
                  <Input
                    label="Search"
                    icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  />
                </div>
              </div>
            
            </CardHeader>
            
            <CardBody className="overflow-scroll px-0">

              {/* <pre>{JSON.stringify(serviceProviders, undefined, 2)}</pre>  */}

              <table className="mt-4 w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                
                <tbody>
                  {currentProviders.map ((doc, index) => {
                      const isLast = index === currentProviders.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";
 
                      return (

                        
                        <tr key={doc.firstName}>
                          <td className={classes}>
                            <div className="flex items-center gap-3">
                              <Avatar src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9ISaBFDC88ejiGrYACSt81CFq21QsZ6bow&s"} alt={doc.firstName} size="sm" />
                              <div className="flex flex-col">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {`${doc.firstName} ${doc.middleName || ''} ${doc.surName} ${doc.suffix || ''}`.trim()}
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal opacity-70"
                                >
                                  {doc.email}
                                </Typography>
                              </div>
                            </div>
                          </td>

                          <td className={classes}>
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {doc.profession}
                              </Typography>
                            </div>
                          </td>


                          <td className={classes}>
                            <div className="w-max">
                              <Chip
                                variant="ghost"
                                size="sm"
                                value={doc.status ? "active" : "inactive"}
                                color={doc.status ? "green" : "blue-gray"}
                              />
                            </div>
                          </td>

                          <td className={classes}>
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {doc.clinicAddress}
                              </Typography>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {doc.clinicTime}
                              </Typography>
                            </div>
                          </td>


                          <td className={classes}>
                            <Tooltip content="Update Status">
                              <IconButton variant="text">
                                <PencilIcon className="h-4 w-4" onClick={handleEditOpen} />

                                <Dialog
                                  open={open}
                                  handler={handleEditOpen}
                                  animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0.9, y: -100 },
                                  }}
                                >
                                  <DialogHeader>Update Appointment Status</DialogHeader>
                                  <DialogBody>

                                    <div>
                                    
                                        <p><strong>Name:</strong> [Interviewee's Name]</p>
                                        <p><strong>Email:</strong> [Interviewee's Email]</p>
                                        <p><strong>Gender:</strong> [Interviewee's Gender]</p>
                                        <p><strong>Address:</strong> [Interviewee's Address]</p>
                                        <p><strong>Appointment Schedule:</strong> [Date and Time]</p>
                                
                                      {/* <form action="">
                                      <div className="mb-4">
                                        <label htmlFor="status" className="block font-poppins text-gray-700 font-medium mb-2">
                                          Appointment Status <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                          id="status"
                                          className="select select-bordered w-full max-w-xs"                        
                                          // value={status}
                                          // onChange={(e) => setstatus(e.target.value)}
                                        >
                                          <option value="">-- Select Status --</option>
                                          <option value="Upcoming">Upcoming</option>
                                          <option value="InProgress">In Progress</option>
                                          <option value="Done">Done</option>
                                          <option value="NoShow">No Show</option>
                                        </select>
                                      </div>
                                      </form> */}
                                      
                                    </div>

                                  </DialogBody>

                                  <DialogFooter>
                                    <Button
                                      variant="text"
                                      color="red"
                                      onClick={handleEditOpen}
                                      className="mr-1"
                                    >
                                      <span>Cancel</span>
                                    </Button>
                                    <Button variant="gradient" color="green" onClick={handleEditOpen}>
                                      <span>Update</span>
                                    </Button>
                                  </DialogFooter>
                                </Dialog>

                              </IconButton>
                            </Tooltip>

                            <Tooltip content="Delete Data">
                              <IconButton variant="text">
                                <TrashIcon className="h-4 w-4"  onClick={handleDeleteOpen}/>

                                <Dialog
                                  open={deleteOpen}
                                  handler={handleDeleteOpen}
                                  animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0.9, y: -100 },
                                  }}
                                >
                                  <DialogHeader>Are you sure you want to delete this data?</DialogHeader>
                                  <DialogBody>
                                    This action cannot be undone, and the data will be permanently removed from your records.
                                  </DialogBody>
                                  <DialogFooter>
                                    <Button
                                      variant="text"
                                      color="green"
                                      onClick={handleDeleteOpen}
                                      className="mr-1"
                                    >
                                      <span>Cancel</span>
                                    </Button>
                                    <Button variant="gradient" color="red" onClick={(e) => deleteHandler(doc.id)} >
                                      <span>Delete</span>
                                    </Button>
                                  </DialogFooter>
                                </Dialog>

                              </IconButton>
                            </Tooltip>
                          </td>
 
                        </tr>
                      );
                    },
                  )}
                </tbody>
              </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
              <Typography variant="small" color="blue-gray" className="font-normal">
              Page {currentPage} of {Math.ceil(serviceProviders.length / providersPerPage)}
              </Typography>
              <div className="flex gap-2">
                <Button variant="text" size="sm" onClick={prevPage} disabled={currentPage === 1}>
                  Previous
                </Button>
                <Button variant="outlined" size="sm" onClick={nextPage} disabled={currentPage === Math.ceil(serviceProviders.length / providersPerPage)}>
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>

        </main>
      </div>
    </div>
  );
};

export default ServiceProviders;
