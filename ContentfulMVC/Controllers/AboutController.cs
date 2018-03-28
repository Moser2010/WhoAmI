using System;
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
    public class AboutController : Controller
    {
        private readonly IContentfulClient _client;
        public AboutController(IContentfulClient client)
        {
            _client = client;
        }
        public async Task<IActionResult> Index()
        {
            //var qb = QueryBuilder<Posts>.New.FieldEquals(f => f.sys.Id, id);
            var author = await _client.GetEntry<Author>("56WvqVr1oIOGqScqoY6EYK");
            return View("Index", author);
        }
        public async Task<IActionResult> WhoIAm()
        {
            var author = await _client.GetEntry<Author>("56WvqVr1oIOGqScqoY6EYK");
            return View("WhoIAm", author);
        }
        public async Task<IActionResult> WhatIDo()
        {
            var author = await _client.GetEntry<Author>("56WvqVr1oIOGqScqoY6EYK");
            return View("WhatIDo", author);
        }
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
