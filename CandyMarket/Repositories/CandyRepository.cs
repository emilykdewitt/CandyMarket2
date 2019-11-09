using System;
using System.Collections.Generic;
using System.Linq;
using CandyMarket.Api.DataModels;
using CandyMarket.Api.Dtos;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using Dapper;

namespace CandyMarket.Api.Repositories
{
    public class CandyRepository : ICandyRepository
    {
        string _connectionString = "Server=localhost;Database=CandyMarket;Trusted_Connection=True;";

        public List<Candy> GetAllCandy()
        {
            using (var db = new SqlConnection(_connectionString))
            {

                var candies = db.Query<Candy>("Select * from Candy");
                return candies.ToList();
            }
        }

        public Candy AddCandy(Candy newCandy)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO [Candy]
                                                    ([Name]
                                                    ,[Category]
                                                    ,[YearsSinceCreation])
	                                        output inserted.*
                                                VALUES
                                                    (@name
                                                    , @category
                                                    , @yearsSinceCreation)";
                return db.QueryFirst<Candy>(sql, newCandy);
            }
        }

        public bool EatCandy(int candyId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"delete
                            from candy
                            where [CandyId] = @candyId";

                return db.Execute(sql, new { candyId }) == 1;
            }
        }
    }
}