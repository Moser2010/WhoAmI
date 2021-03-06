﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ContentfulMVC.Models;
using Contentful.Core;
using Contentful.Core.Models;
using Contentful.Core.Search;

namespace ContentfulMVC.Controllers
{
    public class HomeController : Controller
    {
        private readonly IContentfulClient _client;
        public HomeController(IContentfulClient client)
        {
            _client = client;
        }
        public async Task<IActionResult> Index()
        {
            //var qb = QueryBuilder<Posts>.New.FieldEquals(f => f.sys.Id, id);
           var allPosts = await _client.GetEntriesByType<Posts>("post");
           var orderedPosts =  allPosts.OrderByDescending(Posts => Posts.PublishDate);
           ViewData["Title"] = "Home";
           return View(orderedPosts);
        }

        public IActionResult Error()
        {
            ViewData["Title"] = "Error";
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
