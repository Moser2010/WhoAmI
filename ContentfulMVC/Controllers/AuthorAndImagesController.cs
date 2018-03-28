using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ContentfulMVC.Models;
using ContentfulMVC.Models.ViewModels;
namespace ContentfulMVC.Controllers
{
    public class AuthorAndImagesController : Controller
    {
        public IActionResult Index()
        {
            
            AuthorAndImages AAI = new AuthorAndImages();
            
            return View(AAI);
        }
    }
}