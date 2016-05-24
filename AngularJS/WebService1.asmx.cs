using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;

namespace AngularJS
{
    /// <summary>
    /// Summary description for WebService1
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class WebService1 : System.Web.Services.WebService
    {

        [WebMethod]
        public void GetAllEmployees()
        {
            List<Employee> listEmployees = new List<Employee>();
            using (var db = new Model1())
            {
                var query = from e in db.Employees
                            orderby e.Id
                            select e;

                foreach (var item in query)
                {
                    Employee employee = new Employee();
                    employee.Id = Convert.ToInt32(item.Id);
                    employee.Name = item.Name.ToString();
                    employee.Gender = item.Gender.ToString();
                    employee.Salary = Convert.ToInt32(item.Salary);
                    listEmployees.Add(employee);
                }
            }

            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(listEmployees));

        }
    }
}
