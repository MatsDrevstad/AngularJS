using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Country> listCountries = new List<Country>();

            NewMethod(listCountries);
            foreach (var country in listCountries)
            {
                foreach (var city in country.Cities)
                {
                    Console.WriteLine(city.Name + "\r");
                }
            }
            Console.ReadLine();
        }

        private static void NewMethod(List<Country> listCountries)
        {
            string cs = ConfigurationManager.ConnectionStrings["Model1"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("Select * from tblCountry;Select * from tblCity", con);
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                DataSet ds = new DataSet();
                da.Fill(ds);
                Console.WriteLine(ds);

                DataView dataView = new DataView(ds.Tables[1]);

                foreach (DataRow countryDataRow in ds.Tables[0].Rows)
                {
                    Country country = new Country();
                    country.Id = Convert.ToInt32(countryDataRow["Id"]);
                    country.Name = countryDataRow["Name"].ToString();

                    dataView.RowFilter = "CountryId = '" + country.Id + "'";

                    List<City> listCities = new List<City>();

                    foreach (DataRowView cityDataRowView in dataView)
                    {
                        DataRow cityDataRow = cityDataRowView.Row;

                        City city = new City();
                        city.Id = Convert.ToInt32(cityDataRow["Id"]);
                        city.Name = cityDataRow["Name"].ToString();
                        city.CountryId = Convert.ToInt32(cityDataRow["CountryId"]);
                        listCities.Add(city);
                    }

                    country.Cities = listCities;
                    listCountries.Add(country);
                }

            }
        }
    }
}
