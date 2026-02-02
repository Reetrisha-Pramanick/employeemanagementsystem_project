const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskStats: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Design Login Page",
        description: "Create a responsive login page for the EMS project",
        date: "2026-01-12",
        category: "UI",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve alignment issue in the dashboard navbar",
        date: "2026-01-10",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update Employee List",
        description: "Add new employee records and remove inactive ones",
        date: "2026-01-11",
        category: "Database",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Riya",
    email: "employee2@example.com",
    password: "123",
    taskStats: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Create Dashboard Charts",
        description: "Develop charts to show employee performance metrics",
        date: "2026-01-12",
        category: "UI",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Write API Documentation",
        description: "Document all endpoints for internal API usage",
        date: "2026-01-09",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Kunal",
    email: "employee3@example.com",
    password: "123",
    taskStats: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Test Login Functionality",
        description: "Ensure login works for all roles including admin",
        date: "2026-01-11",
        category: "QA",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix CSS Bugs",
        description: "Resolve minor styling issues in employee profile page",
        date: "2026-01-10",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Optimize Queries",
        description: "Improve database query performance for employee list",
        date: "2026-01-12",
        category: "Database",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    taskStats: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Setup Email Notifications",
        description: "Configure automated emails for task updates",
        date: "2026-01-11",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update Employee Roles",
        description: "Add role management functionality",
        date: "2026-01-09",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix Logout Bug",
        description: "Resolve issue where users remain logged in after logout",
        date: "2026-01-12",
        category: "Frontend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Soham",
    email: "employee5@example.com",
    password: "123",
    taskStats: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Create Attendance Report",
        description: "Generate monthly attendance report for all employees",
        date: "2026-01-12",
        category: "Reports",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Test Dashboard Filters",
        description: "Check that all filters on dashboard work correctly",
        date: "2026-01-10",
        category: "QA",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Backup Database",
        description: "Perform weekly backup of all employee data",
        date: "2026-01-11",
        category: "Database",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = {
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}
export const setLocalStorage = () => {
 localStorage.setItem('employees',JSON.stringify(employees))
 localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () => {
   const employees= JSON.parse(localStorage.getItem('employees'))
   const admin= JSON.parse(localStorage.getItem('admin'))
   return {employees,admin}
}