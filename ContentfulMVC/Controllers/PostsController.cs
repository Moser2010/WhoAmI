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
    public class PostsController : Controller
    {
        private readonly IContentfulClient _client;
        public PostsController(IContentfulClient client)
        {
            _client = client;
        }
        public async Task<IActionResult> Index()
        {
            var allPosts = await _client.GetEntries<Posts>();
            ViewData["Title"] = "All Posts";
            return View(allPosts);
        }
        public async Task<IActionResult> SinglePost(string id)
        {
            var qb = QueryBuilder<Posts>.New.FieldEquals(f => f.sys.Id, id);
            var post = (await _client.GetEntries(qb)).FirstOrDefault();
            //var post = await _client.GetEntryAsync<Posts>(id);
            //var assets = await _client.GetAssetsAsync();
            ViewData["Title"] = post.Title;
            return View(post);
        }
    }
}